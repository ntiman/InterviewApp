import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import EventCard from "./EventCard";

export default function RecentEventsList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsReducer.events);

  return (
    <section className=" rounded-xl py-4 w-full">
      <div className="flex flex-row justify-between align border-b-2 py-4">
        <span className="flex flex-row gap-4 ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Recent events
          </h3>
          <div className="bg-primary px-[7px] py-[1px] mt-1 h-6  rounded-full text-sm font-bold">
            {events?.length}
          </div>
        </span>
        <Button varian="ghost" className="bg-card">all events</Button>
      </div>
      <section className="flex flex-row mt-6 gap-4">
        {events?.map((event, index) => (
          <EventCard event={event} key={index} index={index} />
        ))}
      </section>
    </section>
  );
}
