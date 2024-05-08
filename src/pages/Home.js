import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import fetchImages from "../api/fetchImages";
import { useDispatch } from "react-redux";
import { setImages, setError } from "../store/slices/scansSlice";

export default function Home() {
  const dispatch = useDispatch();

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
    <section className="flex bg-red w-full justify-center align-middle h-full">
      <ImageCarousel />
    </section>
  );
}
