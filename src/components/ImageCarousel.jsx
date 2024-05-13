import { useEffect, useState } from "react";
import { fetchEvents } from "../api/camera";
import CarouselButton from "./CarouselButton";
import ImageScan from "./ImageScan";
import ScanMetadata from "./ScanMetadata";
import { useSelector, useDispatch } from "react-redux";
import {
  setImages,
  setError,
  nextImage,
  previousImage,
  resetCurrentIndex,
} from "../store/slices/eventsSlice";
import ToggleButton from "./ToggleSwitch";
import { fullDate } from "../lib/dateFormatter";
import { Clock2, CircleAlert } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ImageCarousel() {
  const dispatch = useDispatch();

  const [filterIsToggled, setFilterIsToggled] = useState(false);

  const images = useSelector((state) => state.eventsReducer.images);
  const imagesError = useSelector((state) => state.eventsReducer.error);
  const currentImageIndex = useSelector(
    (state) => state.eventsReducer.currentImageIndex
  );

  const currentImage = images[currentImageIndex];
  const createdOn = fullDate(currentImage?.createdOn);

  const handleClick = (type) => {
    if (type === "next") {
      dispatch(nextImage());
    } else {
      dispatch(previousImage());
    }
  };

  return (
    <section className="flex flex-row h-full w-full">
      {imagesError && <div> {imagesError} </div>}
      {!imagesError && (
        <section className="flex flex-col gap-y-2 justify-center align-middle w-screen">
          <section className="flex mb-0 bg-background border-2 border-border p-4 justify-between">
            <span className="flex flex-row">
              <Clock2 size={22} className="mr-2 " />{" "}
              <p className="text-white/80">{createdOn}</p>
            </span>
            <section className="flex gap-2">
              <Badge variant="secondary">
                {images[currentImageIndex]?.detectionsList.length}
                <span className="ml-1">
                  {images[currentImageIndex]?.detectionsList.length !== 1
                    ? "DETECTIONS"
                    : "DETECTION"}
                </span>
              </Badge>
              {images[currentImageIndex]?.alert === true && (
                <Badge variant="destructive">
                  <CircleAlert size={12} className="mr-2" />
                  ALERT
                </Badge>
              )}
            </section>
          </section>

          <section className="flex flex-row justify-between items-center bg-background py-4 px-4">
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
            <section className="flex flex-col justify-center items-center gap-y-3">
              <p className="mb-4">
                <b>{currentImageIndex + 1}</b>/{images.length}
              </p>
              {images.length > 0 && <ImageScan detectionImage={currentImage} />}
            </section>
            <CarouselButton
              type="next"
              onClick={handleClick}
              className={"rounded-full"}
              isEnabled={currentImageIndex + 1 <= images.length}
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
          {images.length > 0 && (
            <section className="flex flex-col sm:flex-row gap-x-8 justify-center items-center">
              <ScanMetadata scan={currentImage} />
            </section>
          )}
        </section>
      )}
    </section>
  );
}
