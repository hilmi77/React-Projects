import React, { useState } from "react";
import Values from "values.js";
type Color = {
  rgb: number[];
  weight: number;
  hex: string;
};

const App = () => {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Color[]>(new Values("#f15025").all(10));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const { rgb, weight, hex } = color;
          return (
            <article
              key={index}
              className="color"
              style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
            >
              <p className="percent-value">{weight}%</p>
              <p className="color-value">{hex}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default App;
