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
      <SelectTrigger className="w-[280px]">
      <Cctv/>
        <SelectValue placeholder={selectedCamera?.tags.name} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available cameras</SelectLabel>
          {cameras.map((camera) => (
            <section key={camera.deviceId} className="flex flex-row">
              <SelectItem value={camera.tags.name}>
                {camera.tags.name}
                {camera.connectionState ? (
                  <span className="text-green-500 text-xs ml-2">active</span>
                ) : (
                  <span className="text-white/50 text-xs ml-2">inactive</span>
                )}
              </SelectItem>
            </section>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

