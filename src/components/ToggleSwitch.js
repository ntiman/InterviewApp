import React from "react";
import PropTypes from "prop-types";

const ToggleButton = ({ value, onToggle, children }) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" onClick={() => onToggle(!value)}></input>
        <div className="relative w-11 h-6 bg-zinc-900 peer-focus:outline-none peer-focus:ring- rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent"></div>
        <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">
          {children}
        </span>
      </label>
    </>
  );
};

export default ToggleButton;

ToggleButton.propTypes = {
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
