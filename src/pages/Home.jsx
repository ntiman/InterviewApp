import { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { fetchEvents, fetchCamera } from "../api/camera";
import { useDispatch } from "react-redux";
import { setImages, setError, setEvents } from "../store/slices/eventsSlice";
import {
  setCameras,
  setCamerasLoadingError,
} from "../store/slices/camerasSlice";
import SelectCamera from "../components/SelectCamera";
import { fetchOrgs } from "../api/org";
import RecentEventsList from "../components/RecentEventsList";
import Detections from "../components/Detections";

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
        dispatch(setEvents(images.events));
        dispatch(setImages(images.scanResults));
      },
      (error) => {
        dispatch(setError(error));
      }
    );
  }, [dispatch]);

  return (
    <section className="flex bg-red w-full h-full">
      <section className="flex flex-col gap-8 w-full">
        <section className="">
          <RecentEventsList />
        </section>
        <section className="">
          <Detections />
        </section>
      </section>
    </section>
  );
}
