import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setImages,
  setError,
  nextImage,
  previousImage,
  resetCurrentIndex,
} from "../store/slices/eventsSlice";
import ImageCarousel from "./ImageCarousel";
import SelectCamera from "./SelectCamera";
import { fetchEvents } from "../api/camera";
import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";
import { ListFilter } from "lucide-react";

export default function Detections() {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.eventsReducer.images);
  const currentImageIndex = useSelector(
    (state) => state.eventsReducer.currentImageIndex
  );
  const currentImage = images[currentImageIndex];

  const [filterIsToggled, setFilterIsToggled] = useState(false);

  const handleToggle = (value) => {
    setFilterIsToggled(value);
    dispatch(resetCurrentIndex());
  };

  useEffect(() => {
    if (filterIsToggled) {
      const filteredImages = images.filter((image) => {
        return image.detectionsList.length > 0;
      });
      dispatch(setImages(filteredImages));
    } else {
      fetchEvents(
        (images) => {
          dispatch(setImages(images.scanResults));
        },
        (error) => {
          dispatch(setError(error));
        }
      );
    }
  }, [filterIsToggled]);
  return (
    <div>
      <div className="flex flex-row justify-between align py-4">
        <span className="flex flex-row gap-4 ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Detections
          </h3>
        </span>
        <section className="flex flex-row gap-2">
        <SelectCamera />
        <Toggle aria-label="Toggle bold" className="gap-2" pressed={filterIsToggled} onPressedChange={handleToggle}>
          <ListFilter />
          Only show images with detected gas
        </Toggle>
        </section>
      </div>
      <div>
        <ImageCarousel />
      </div>
    </div>
  );
}
