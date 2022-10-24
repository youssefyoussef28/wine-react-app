import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const Wines = () => {
  const [wineType, setWineType] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  const getWine = () => {
    axios
      .get(`https://api.sampleapis.com/wines/${wineType}`)
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="text-left p-8 font-light text-3xl bg-amber-600 text-white drop-shadow-lg">
        Wine House - Select One of our four types of wine
      </h1>
      <div className="bg-white">
        <div className="flex justify-center item p-5">
          <button
            className="px-12 py-3 text-white bg-red-500 rounded-full drop-shadow-md hover:bg-red-600 m-5 font-lighttext-xl focus:ring-red-300 focus:ring-4"
            onClick={() => {
              setWineType("reds");
              getWine();
            }}
            type="submit"
          >
            Reds
          </button>
          <button
            className="px-12 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 m-5 font-light text-xl focus:ring-blue-300 focus:ring-4 drop-shadow-md"
            onClick={() => {
              setWineType("whites");
              getWine();
            }}
            type="submit"
          >
            Whites
          </button>
          <button
            className="px-12 py-3 text-white bg-emerald-500 rounded-full hover:bg-emerald-600 m-5 font-light text-xl focus:ring-emerald-300 focus:ring-4 drop-shadow-md"
            onClick={() => {
              setWineType("sparkling");
              getWine();
            }}
            type="submit"
          >
            Sparkling
          </button>
          <button
            className="px-12 py-3 text-white bg-pink-500 rounded-full hover:bg-pink-600 m-5 font-light text-xl focus:ring-pink-300 focus:ring-4 drop-shadow-md"
            onClick={() => {
              setWineType("rose");
              getWine();
            }}
            type="submit"
          >
            Rose
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap  justify-center items-center drop-shadow-md  gap-4">
          {" "}
          {fetchedData &&
            fetchedData.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    winery={item.winery}
                    wine={item.wine}
                    image={item.image}
                    location={item.location}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Wines;
