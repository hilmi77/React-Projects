import React from "react";
import Coctail from "./Coctail";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

const CoctailList = () => {
  const { loading, coctails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (coctails.length < 1) {
    return (
      <h2 className="section-title">
        no coctails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">coctails</h2>
      <div className="cocktails-center">
        {coctails.map((coctail) => {
          return <Coctail key={coctail.id} {...coctail} />;
        })}
      </div>
    </section>
  );
};

export default CoctailList;
