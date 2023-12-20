import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [show, setShow] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setTours(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    if (show) {
      fetchTours();
    }
  }, [show]);

  if (!show) {
    return (
      <main>
        <div className="title">
          <h2>Welcome to the tours</h2>
          <button className="btn" onClick={() => setShow(true)}>
            Show Tours
          </button>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
