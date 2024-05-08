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
  const currentImageIndex = useSelector(
    (state) => state.scansReducer.currentImageIndex
  );

  const currentImage = images[currentImageIndex];
  const createdOn = new Date(currentImage?.createdOn).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
  );

  const handleToggle = (value) => {
    setFilterIsToggled(value);
  };

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
    <section className="flex flex-row justify-center items-center content-center h-full ">
      {imagesError && <div> {imagesError} </div>}
      {!imagesError && (
        <section className="flex flex-col gap-y-4 justify-center align-middle ">
          <section className="text-center text-xl mb-4">{createdOn}</section>

          <section className="flex flex-row justify-between align-middle">
            <CarouselButton
              type="previous"
              className={"rounded-full"}
              onClick={handleClick}
              isEnabled={currentImageIndex > 0}
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </CarouselButton>
            <p className="">
              <b>{currentImageIndex + 1}</b>/{images.length }
            </p>
            <CarouselButton
              type="next"
              onClick={handleClick}
              className={"rounded-full"}
              isEnabled={currentImageIndex +1 <= images.length}
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </CarouselButton>
          </section>

          <section>
            <ToggleButton value={filterIsToggled} onToggle={handleToggle}>
              Only show images with detected gas
            </ToggleButton>
          </section>

          <section className="flex lg:flex-row flex-col gap-x-8 align-top">
            {images.length > 0 && <ImageScan detectionImage={currentImage} />}
            <ScanMetadata scan={currentImage} />
          </section>

          {/* <section>
            <ScanMetadata scan={currentImage} />
          </section> */}
        </section>
      )}
    </section>
  );
}
