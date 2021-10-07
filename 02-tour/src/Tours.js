import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section className="title">
      <h2>our tours</h2>
      <div className="underline">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
