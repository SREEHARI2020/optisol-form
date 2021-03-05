import { Button } from "@material-ui/core";
import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import './CameraComponent.css'
 
const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
 
  return (
    <div className="camera-container">
      <Camera ref={camera} 
      aspectRatio={4 / 3} />
    <div classname="camera-container-button">  <Button color="primary" variant="contained" onClick={() => setImage(camera.current.takePhoto())}>Take photo</Button> </div>
      <img classname="camera-container-img"  src={image} alt='Taken photo'/>
    </div>
  );
}
 
export default CameraComponent;