import { useState, useEffect } from "react";
import fetchImages from "../api/fetchImages";
import CarouselButton from "./CarouselButton";
import ImageScan from "./ImageScan";
import ScanMetadata from "./ScanMetadata";
import { useSelector, useDispatch } from "react-redux";
import {
  setImages,
  setError,
  nextImage,
  previousImage,
} from "../store/scansSlice";

export default function ImageCarousel() {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.scansReducer.images);
  const imagesError = useSelector((state) => state.scansReducer.error);
  const currentImageIndex = useSelector((state) => state.scansReducer.currentImageIndex);

  const currentImage = images[currentImageIndex];

  const handleClick = (type) => {
    if (type === "next") {
      dispatch(nextImage());
    } else {
      dispatch(previousImage());
    }
  };

  useEffect(() => {
    fetchImages(
      (images) => {
        dispatch(setImages(images));
      },
      (error) => {
        dispatch(setError(error));
      }
    );
  }, []);

  return (
    <div
      // TODO: Styles can be defined in a seperate file using mui useStyle
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "85%",
        height: "100%",
      }}
    >
      {imagesError && <div> {imagesError} </div>}
      {!imagesError && (
        <>
          <CarouselButton
            type="previous"
            onClick={handleClick}
            isEnabled={currentImageIndex - 1 >= 0}
          >
            Previous image
          </CarouselButton>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div> {images.length} total images </div>
              <div> Index: {currentImageIndex} </div>
            </div>
            {images.length > 0 && (
              <ImageScan detectionImage={currentImage} />
            )}
            {currentImage?.createdOn && (
              <div> Scan Timestamp: {currentImage.createdOn} </div>
            )}

            <ScanMetadata scan={currentImage} />
          </div>
          <CarouselButton
            type="next"
            onClick={handleClick}
            isEnabled={currentImageIndex + 1 < images.length}
          >
            Next image
          </CarouselButton>
        </>
      )}
    </div>
  );
}
