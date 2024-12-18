import React from 'react';
import './about.css';
import InfiniteScroller from '../components/infinite_scroll';
import AsciiViewer from '../components/ascii_viewer';

function About() {
    return (
      <div>
        <section className="header">
                <img src="/public/images/hello_my_name_is.png" className="hello-my-name-is-sticker" />
                 <div className="main-about-text main-text"><span>Panagiotis Evangelou</span></div>
            </section>

        <hr className="divider" />

        <section className="about-background-header">
          <h2>SKILLS</h2>
            <InfiniteScroller />
        </section>

        <hr className="divider" />

        <section className="about-background-header">
        <h2>ABOUT</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, 
                id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, 
                laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus 
                eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae 
                gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. 
                Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus. 
            </h3>
        </section>

        <hr className="divider" />

        <section className="about-background-header">
        <h2>EDUCATION</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, 
                id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, 
                laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus 
                eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae 
                gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. 
                Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus. 
            </h3>
        </section>

        <hr className="divider" />

        <section className="about-background-header">
        <h2>CONTACT</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, 
                id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, 
                laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus 
                eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae 
                gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. 
                Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus. 
            </h3>
        </section>

        <hr className="divider" />

            {/* <AsciiViewer /> */}
        <h1 className="bottom-website-text"><span>Panagiotis Evangelou</span></h1>
        </div>
    );
  }
  
  export default About;
  