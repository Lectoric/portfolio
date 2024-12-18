import React from 'react';
import './image_gallery.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
    { src: 'https://picsum.photos/1000/1000?random=2', description: 'Tokyo, 2019' },
    { src: 'https://picsum.photos/1000/800?random=3', description: 'Game Design' },
    { src: 'https://picsum.photos/900/1200?random=4', description: 'VR Project' },
    { src: 'https://picsum.photos/1100/950?random=5', description: 'Amsterdam, 2023' },
    { src: 'https://picsum.photos/800/600?random=6', description: 'Unity Demo' },
    { src: 'https://picsum.photos/1000/1400?random=7', description: 'AI Research' },
    { src: 'https://picsum.photos/1100/600?random=8', description: 'Paris, 2022' },
    { src: 'https://picsum.photos/1000/1000?random=9', description: 'Web Design' },
    { src: 'https://picsum.photos/1000/800?random=10', description: 'Mobile App' },
    { src: 'https://picsum.photos/900/1200?random=11', description: 'London, 2021' },
    { src: 'https://picsum.photos/1100/950?random=12', description: '3D Model' },
    { src: 'https://picsum.photos/800/600?random=13', description: 'UI/UX Study' },
    { src: 'https://picsum.photos/1000/1400?random=14', description: 'Berlin, 2020' },
    { src: 'https://picsum.photos/1100/600?random=15', description: 'Game Jam' },
    { src: 'https://picsum.photos/1000/1000?random=16', description: 'AR Demo' },
    { src: 'https://picsum.photos/1000/800?random=17', description: 'Rome, 2023' },
    { src: 'https://picsum.photos/900/1200?random=18', description: 'Portfolio' },
    { src: 'https://picsum.photos/1100/950?random=19', description: 'Prototype' },
    { src: 'https://picsum.photos/800/600?random=20', description: 'Madrid, 2022' },
    { src: 'https://picsum.photos/1000/1400?random=21', description: 'ML Model' },
    { src: 'https://picsum.photos/1100/600?random=22', description: 'Interface' },
    { src: 'https://picsum.photos/1000/1000?random=23', description: 'Oslo, 2021' },
    { src: 'https://picsum.photos/1000/800?random=24', description: 'Game Art' },
    { src: 'https://picsum.photos/900/1200?random=25', description: 'Blender' },
    { src: 'https://picsum.photos/1100/950?random=26', description: 'Vienna, 2020' },
    { src: 'https://picsum.photos/800/600?random=27', description: 'Project X' },
    { src: 'https://picsum.photos/1000/1400?random=28', description: 'Research' },
    { src: 'https://picsum.photos/1100/600?random=29', description: 'Athens, 2019' },
];

class MyWrapper extends React.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div className="gallery-container">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <div key={i} className="image-gallery-item">
                                <img
                                    src={image.src}
                                    className="img"
                                />
                                <div className="tooltip">{image.description}</div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        );
    }
}

export default MyWrapper;
