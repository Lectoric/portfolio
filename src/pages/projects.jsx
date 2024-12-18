import React from 'react';
import './projects.css';

import AsciiViewer from '../components/ascii_viewer';
import GalleryViewer from '../components/image_gallery';

function App() {
  return (
      <div>
        <header className="app-header">
            <div className="main_front_text"><span>('Portfolio')</span></div>
                {/* Scroll down indicator, will revisit later mayhaps */}
                {/* <img src="/public/images/scroll_down.gif" alt="Description" className="scroll_down_container" /> */}
        </header>

        <section className="gallery-container">
            <GalleryViewer />
        </section>

        <AsciiViewer />

        <h1 className="bottom-website-text"><span>Panayiotis Evangelou</span></h1>
      </div>
  );
}

export default App;