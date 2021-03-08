import React, { Component } from 'react';
import {Camera} from "react-camera-pro";
import './CameraComponent.css'
import { Button } from "@material-ui/core";

class CameraClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:null,
             
        }
        this.camera = React.createRef();
        this.canvasRef = React.createRef();
     

    }

    componentDidMount(){
        const canvas = this.canvasRef.current
        canvas.width =500;
        canvas.height=500;
        const ctx = canvas.getContext('2d');
        let rect = {};
          let  drag = false;
          var imageObj = null;

          function init(image) {
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
          init(this.state.image);
      }

      componentDidUpdate(image){
        const canvas = this.canvasRef.current
        canvas.width =500;
        canvas.height=500;
        const ctx = canvas.getContext('2d');
        let rect = {};
          let  drag = false;
          var imageObj = null;

          function init(image) {
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
              setRectValues(rect.startX, rect.startY, rect.w, rect.h);
           
            
            }
          }
          const setRectValues =(x1,x2,y1,y2)=>{

            
                console.log("rect_coordinate1 :", x1);
                console.log("rect_coordinate2 :" ,x2);
                console.log("rect_coordinate3 :", y1);
                console.log("rect_coordinate4 : ",y2);
             
           
            

          }
          //
          init(this.state.image);

     

      }



    handleClick=(e)=>{
        e.preventDefault();
       let photo = this.camera.current.takePhoto();
       this.setState({image:photo})

    }

    render() {
        return (
            <div className="camera-container"  >
      <Camera ref={this.camera} 
      aspectRatio={4 / 3} />
    <div classname="camera-container-button">  <Button color="primary" variant="contained" onClick={(e)=>this.handleClick(e) }>Take photo</Button> </div>
      
      <canvas ref={this.canvasRef}>
                
                </canvas>
    </div>
        );
    }
}

export default CameraClass;