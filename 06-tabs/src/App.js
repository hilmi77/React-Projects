import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
        <button className="btn" onClick={showHandler}>
          {show ? "Hide" : "Show"} Details
        </button>
      </div>
      {show && (
        <div className="jobs-center">
          <Jobs jobs={jobs} value={value} setValue={setValue} />
          <JobDetails job={jobs[value]} />
        </div>
      )}
    </section>
  );
}

export default App;
