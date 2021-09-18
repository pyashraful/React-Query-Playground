import React from "react";
import { useQuery } from "react-query";
import { fetchPeoples } from "../hooks/useFetch";

// const fetchPeoples = async () => {
//   const res = await fetch(`https://swapi.dev/api/people`);
//   return res.json();
// };

const Peoples = () => {
  const { data: peoples, status } = useQuery("peoples", () =>
    fetchPeoples(`https://swapi.dev/api/people`)
  );

  console.info(peoples);
  console.info(status);

  return (
    <div>
      {status === "error" && <p> there was an error</p>}
      {status === "loading" && <p> Loading....</p>}
      {status === "success" &&
        peoples.results.map((people) => (
          <h2 key={people.name}>{people.name}</h2>
        ))}
    </div>
  );
};

export default Peoples;
