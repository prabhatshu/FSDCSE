import React, { useState, useEffect } from 'react';
import './ImageManipu.css';

export default function ImageManipu() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState('#000'); 

  function enhance() {
    setHeight(height + 50);
  }

  function enhancew() {
    setWidth(width + 50);
  }

  function rotateimg() {
    setRotate(rotate + 30);
  }

  function colorch() {
    const randomColor = `#${Math.floor(Math.random() * 255)}`;
    setColor(randomColor);
  }

  return (
    <div className="div">
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}>
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-playful-kitten-kitty-cute-cat-smile-png-image_10263743.png"
          height={height}
          width={width}
          alt="nothing"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
      <div className="btn-con">
        <button className="btnn" onClick={enhance}>Enh height</button>
        <button className="btnn" onClick={enhancew}>Enh Width</button>
        <button className="btnn" onClick={rotateimg}>Rotate</button>
        <button className="btnn" onClick={colorch}>Color</button>
      </div>
    </div>
  );
}
