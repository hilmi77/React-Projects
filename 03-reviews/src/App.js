import React, { useState } from "react";
import Reviews from "./Reviews";

const App = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <button className="btn" onClick={toggleReviews}>
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
        </div>

        {showReviews && <Reviews />}
      </section>
    </main>
  );
};

export default App;
