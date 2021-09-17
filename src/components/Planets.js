import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch(`https://swapi.dev/api/planets`);
  return res.json();
};

const Planets = () => {
  const { data: planets, status } = useQuery("planets", fetchPlanets);

  console.info(planets);
  console.info(status);

  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
};

export default Planets;
