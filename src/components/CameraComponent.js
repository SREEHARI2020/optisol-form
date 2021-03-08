
//Functional Component
import { Button } from "@material-ui/core";

import React, { useState, useRef,useEffect } from "react";
import {Camera} from "react-camera-pro";
import './CameraComponent.css'
 
const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const canvasRef = useRef(null)

	useEffect(() => {
	
		const canvas = canvasRef.current
   canvas.width =500;
   canvas.height=500;
		const ctx = canvas.getContext('2d')
		 let rect = {};
		 let  drag = false;
		 var imageObj = null;

		 function init() {

      if(image){
			 imageObj = new Image();
			 imageObj.onload = function () { ctx.drawImage(imageObj, 0, 0); };
			 imageObj.src = image;
			 canvas.addEventListener('mousedown', mouseDown, false);
			 canvas.addEventListener('mouseup', mouseUp, false);
			 canvas.addEventListener('mousemove', mouseMove, false);
      }
		 }
		 
		 function mouseDown(e) {
			 rect.startX = e.pageX - this.offsetLeft;
			 rect.startY = e.pageY - this.offsetTop;
			 drag = true;
		 }
		 
		 function mouseUp() { drag = false; }
		 
		 function mouseMove(e) {
			 if (drag) {
				 ctx.clearRect(0, 0, 500, 500);
				 ctx.drawImage(imageObj, 0, 0);
				 rect.w = (e.pageX - this.offsetLeft) - rect.startX;
				 rect.h = (e.pageY - this.offsetTop) - rect.startY;
				 ctx.strokeStyle = 'red';
				 ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
			 }
		 }
		 //
		 init();
	 
	}, [image])
 
  return (
    <div className="camera-container" >
      <Camera ref={camera} 
      aspectRatio={4 / 3} />
    <div classname="camera-container-button">  <Button color="primary" variant="contained" onClick={() => setImage(camera.current.takePhoto())}>Take photo</Button> </div>
     
      <canvas  ref={canvasRef} >
            
            </canvas>
    </div>
  );
}
 
export default CameraComponent;