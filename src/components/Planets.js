import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch(`https://swapi.dev/api/planets`);
  return res.json();
};

const Planets = () => {
  const { data: planets, status } = useQuery("planets", fetchPlanets, {
    staleTime: 5000,
  });

  console.info(planets);
  console.info(status);

  return (
    <div>
      {status === "error" && <p> there was an error</p>}
      {status === "loading" && <p> Loading....</p>}
      {status === "success" &&
        planets.results.map((planet) => (
          <h2 key={planet.name}>{planet.name}</h2>
        ))}
    </div>
  );
};

export default Planets;
