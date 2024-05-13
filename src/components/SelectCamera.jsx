import { Cctv } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useSelector, useDispatch } from "react-redux";

export default function SelectCamera() {
  const dispatch = useDispatch();

  const cameras = useSelector((state) => state.camerasReducer.cameras);
  const selectedCamera = useSelector(
    (state) => state.camerasReducer.selectedCamera
  );

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectedCamera?.tags.name} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cameras</SelectLabel>
          {cameras.map((camera) => (
            <section key={camera.deviceId} className="flex flex-row">
              <Cctv />
              <SelectItem value={camera.tags.name}>
                {camera.tags.name}
                {camera.connectionState ? (
                  <b className="text-green-500">yes</b>
                ) : (
                  <b className="text-red-600">no</b>
                )}
              </SelectItem>
            </section>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

SelectCamera.propTypes = {
  // cameras: PropTypes.array,
};
