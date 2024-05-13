import { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { fetchEvents, fetchCamera } from "../api/camera";
import { useDispatch } from "react-redux";
import { setImages, setError } from "../store/slices/eventsSlice";
import {
  setCameras,
  setCamerasLoadingError,
} from "../store/slices/camerasSlice";
import SelectCamera from "../components/SelectCamera";
import { fetchOrgs } from "../api/org";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCamera(
      (camera) => {
        dispatch(setCameras(camera));
      },
      (error) => {
        dispatch(setCamerasLoadingError(error));
      }
    );

    fetchEvents(
      (images) => {
        dispatch(setImages(images.scanResults));
      },
      (error) => {
        dispatch(setError(error));
      }
    );
  }, [dispatch]);

  return (
    <section className="flex bg-red w-full justify-center align-middle h-full">
      <ImageCarousel />
      <SelectCamera />
    </section>
  );
}
