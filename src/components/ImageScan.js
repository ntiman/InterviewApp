import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ImageScan = ({ detectionImage }) => {
  const canvasRef = useRef(null);
  const image = new Image();
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

          ctx.beginPath();
          ctx.moveTo(coordinates[0], coordinates[1]);
          ctx.lineTo(coordinates[2], coordinates[3]);
          ctx.lineTo(coordinates[4], coordinates[5]);
          ctx.lineTo(coordinates[6], coordinates[7]);
          ctx.closePath();
          ctx.strokeStyle = "#e05025"; 
          ctx.lineWidth = 2; 
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
