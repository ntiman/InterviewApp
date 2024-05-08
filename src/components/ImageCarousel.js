import { useEffect, useState } from "react";
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
} from "../store/slices/scansSlice";
import ToggleButton from "./ToggleSwitch";

export default function ImageCarousel() {
  const dispatch = useDispatch();
  
  const [filterIsToggled, setFilterIsToggled] = useState(false);

  const images = useSelector((state) => state.scansReducer.images);
  const imagesError = useSelector((state) => state.scansReducer.error);
  const currentImageIndex = useSelector((state) => state.scansReducer.currentImageIndex);

  const currentImage = images[currentImageIndex];

  const handleToggle = (value) => {
    setFilterIsToggled(value);
  }

  const handleClick = (type) => {
    if (type === "next") {
      dispatch(nextImage());
    } else {
      dispatch(previousImage());
    }
  };

  // TODO: refactor this, dont want to fetch each time the filter is toggled
  useEffect(() => {
    if (filterIsToggled) {
      const filteredImages = images.filter((image) => {
        return image.detectionsList.length > 0;
      });
      dispatch(setImages(filteredImages));
    } else {
      fetchImages(
        (images) => {
          dispatch(setImages(images));
        },
        (error) => {
          dispatch(setError(error));
        }
      );
    }
  }, [filterIsToggled]);

  return (
    <div className="flex flex-row justify-center items-center content-center w-85 h-full"
    >
      <ToggleButton value={filterIsToggled} onToggle={handleToggle}>Only show images with detected gas</ToggleButton>
      
      {imagesError && <div> {imagesError} </div>}
      {!imagesError && (
        <>
          <CarouselButton
            type="previous"
            onClick={handleClick}
            isEnabled={currentImageIndex - 1 > 0}
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
