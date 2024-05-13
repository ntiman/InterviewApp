import React from "react";

export default function StatCard({ header, statName }) {
  return (
    <div className="flex flex-row bg-card p-4 gap-4 items-center rounded-xl border-2 border-border px-8">
      <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0">
        {header}
      </h2>
      <p className="mb-2">{statName}</p>
    </div>
  );
}
