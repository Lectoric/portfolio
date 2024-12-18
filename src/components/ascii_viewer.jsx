// filepath: /c:/Users/panay/Desktop/BUAS/YEAR 2/REPOSITORIES/portfolio/src/components/ascii_viewer.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import '../pages/projects.css';

const AsciiViewer = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Create a clock for rotation
    const clock = new THREE.Clock();

    // Set rotate boolean variable
    let rotateModel = true;

    // Creates empty mesh container
    const myMesh = new THREE.Mesh();

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0, 0);

    // Lights
    const pointLight1 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight1.position.set(100, 100, 400);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-500, 100, -400);
    scene.add(pointLight2);

    // Parameters
    const stlLoader = new STLLoader();

    // Material
    const material = new THREE.MeshStandardMaterial();
    material.flatShading = true;
    material.side = THREE.DoubleSide;

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

    // Renderer
    const renderer = new THREE.WebGLRenderer();

    let effect;

    let characters = ' .:-+*=%@#';
    const effectSize = { amount: 0.205 };
    let backgroundColor = 'transparent';
    let ASCIIColor = 'rgba(184, 255, 71, 1)';

    // Create the ASCII effect and set up as a background
    function createEffect() {
      effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
      effect.setSize(sizes.width, sizes.height);
      effect.domElement.style.color = ASCIIColor;
      effect.domElement.style.backgroundColor = backgroundColor;

      // Style to make the effect behave as a background
      effect.domElement.style.position = 'fixed';
      effect.domElement.style.top = '0';
      effect.domElement.style.left = '0';
      effect.domElement.style.width = '100%';
      effect.domElement.style.height = '100%';
      effect.domElement.style.zIndex = '-5';
      effect.domElement.style.pointerEvents = 'none';
    }

    createEffect();

    container.appendChild(effect.domElement);

    // Load STL model
    stlLoader.load(
      './models/main_page_model.stl',
      function (geometry) {
        myMesh.material = material;
        myMesh.geometry = geometry;

        var tempGeometry = new THREE.Mesh(geometry, material);
        myMesh.position.copy(tempGeometry.position);

        geometry.computeVertexNormals();
        myMesh.geometry.center();

        myMesh.rotation.x = -90 * Math.PI / 180;

        myMesh.geometry.computeBoundingBox();
        var bbox = myMesh.geometry.boundingBox;

        myMesh.position.y = (bbox.max.z - bbox.min.z) / 5;

        camera.position.x = bbox.max.x * 1.5;
        camera.position.y = bbox.max.y;
        camera.position.z = bbox.max.z; 

        scene.add(myMesh);

        camera.lookAt(myMesh.position);

        function tick() {
          if (rotateModel) {
            const elapsedTime = clock.getElapsedTime();
            myMesh.rotation.z = elapsedTime / 3;
          }
          render();
          window.requestAnimationFrame(tick);
        }

        function render() {
          effect.render(scene, camera);
        }

        tick();

        // Adjust zoom as the user scrolls
        const onScroll = () => {
          const maxScroll = document.body.scrollHeight - window.innerHeight; 
          const scrollFactor = scrollY / maxScroll; 
          
          const earlierScroll = Math.min(5, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 10);

          // Might be re-used, zooms out the model
          // camera.position.y = earlierScroll * bbox.max.y * 20;

          // camera.lookAt(myMesh.position); 

          const startColor = [185, 255, 71]; 
          const endColor = [0,0,0];      

          const interpolatedColor = startColor.map((start, i) => {
            return Math.round(start + earlierScroll * (endColor[i] - start));
          });

          const newColor = `rgba(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]}, 1)`;
          
          ASCIIColor = newColor;
          effect.domElement.style.color = ASCIIColor;

          const logo = document.querySelector('.main_front_text');
          if (logo) {
            logo.style.opacity = 1 - earlierScroll;
          }
        };

        // Call onScroll immediately to set the initial state
        onScroll();

        // Add the scroll event listener
        window.addEventListener('scroll', onScroll);

        // Add the beforeunload event listener to handle page refresh
        window.addEventListener('beforeunload', () => {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollFactor = scrollY / maxScroll;
          const earlierScroll = Math.min(5, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 10);

          if (earlierScroll > 0) {
            ASCIIColor = 'rgba(0, 0, 0, 1)';
            effect.domElement.style.color = ASCIIColor;
          }
        });

        // Cleanup the event listeners on component unmount
        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('beforeunload', onScroll);
        };
      }
    );

    // Adjust the viewer when the window is resized
    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      effect.setSize(sizes.width, sizes.height);
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', onScroll);
      container.removeChild(effect.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%' }} />;
};

export default AsciiViewer;