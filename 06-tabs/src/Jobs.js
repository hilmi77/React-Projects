import React from "react";

const Jobs = ({ jobs, value, setValue }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => (
        <button
          key={item.id}
          onClick={() => setValue(index)}
          className={`job-btn ${index === value && "active-btn"}`}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};

export default Jobs;
