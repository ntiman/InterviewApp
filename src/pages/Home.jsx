import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { fetchAlarms, fetchEvents } from "../api/camera";
import { useDispatch } from "react-redux";
import { setImages, setError } from "../store/slices/eventsSlice";
import SelectCamera from "../components/SelectCamera";
import { fetchOrgs } from "../api/org";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEvents(
      (images) => {
        dispatch(setImages(images));
      },
      (error) => {
        dispatch(setError(error));
      }
    );
  }, []);
  return (
    <section className="flex bg-red w-full justify-center align-middle h-full">
      <ImageCarousel />
      <SelectCamera/>
    </section>
  );
}
