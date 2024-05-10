import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ImageScan = ({ detectionImage }) => {
  const canvasRef = useRef(null);
  const image = new Image();

  const padding = 7;
  
  image.alt = "Scan result";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    image.src = detectionImage.jpg;
    const detectionList = detectionImage.detectionsList;

    image.onload = () => {
      // Set canvas and drwaw an image
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // check if there are any hazards detected and draw them out
      if (detectionList.length > 0) {
        detectionList.forEach((detection) => {
          const coordinates = detection.roicoordsList;

          const paddedCoordinates = [
            coordinates[0] - padding, 
            coordinates[1] - padding, 
            coordinates[2] + padding, 
            coordinates[3] - padding, 
            coordinates[4] + padding, 
            coordinates[5] + padding, 
            coordinates[6] - padding, 
            coordinates[7] + padding  
          ];

          ctx.beginPath();
          ctx.moveTo(paddedCoordinates[0], paddedCoordinates[1]);
          ctx.lineTo(paddedCoordinates[2], paddedCoordinates[3]);
          ctx.lineTo(paddedCoordinates[4], paddedCoordinates[5]);
          ctx.lineTo(paddedCoordinates[6], paddedCoordinates[7]);
          ctx.closePath();
          ctx.strokeStyle = "red"; 
          ctx.lineWidth = 3; 
          ctx.stroke();
        });
      }
    };
  }, [detectionImage]);
  return <canvas ref={canvasRef}></canvas>;
};

export default ImageScan;

ImageScan.propTypes = {
  detectionImage: PropTypes.object.isRequired,
};
