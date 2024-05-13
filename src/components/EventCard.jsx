import React from "react";
import PropTypes from "prop-types";
import { day, time } from "../lib/dateFormatter";
import { BellElectric } from "lucide-react";

export default function EventCard({ event, index }) {
  return (
    <div className="flex flex-row items-center bg-background p-5 gap-6 rounded-lg border-2 border-border hover:bg-card transition">
      <BellElectric />
      <div className="">
        <p>{day(event.start)}</p>
        <p className="text-sm text-white/80">
          {time(event.start)} - {time(event.end)}
        </p>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
