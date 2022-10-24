import axios from "axios";
import { useState, useEffect } from "react";

const Wines = () => {
  const [wineType, setWineType] = useState("");

  // const selectedWine = async () => {
  //   const { fetchedData } = await axios.get(
  //     `https://api.sampleapis.com/wines/${wineType}`
  //   );

  //   console.log("DATA", fetchedData);
  // };

  const getWine = () => {
    axios
      .get(`https://api.sampleapis.com/wines/${wineType}`)
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    // selectedWine();
    getWine();
  }, [wineType]);

  return (
    <>
      <h1 className="text-center p-5 font-medium text-3xl">
        Select One from Our 4 types of wine
      </h1>

      <div className="flex justify-center item">
        <button
          className="px-12 py-3 text-white bg-red-500 rounded-full hover:bg-red-600 m-5 font-medium text-xl focus:ring-red-300 focus:ring-4"
          onClick={() => {
            setWineType("reds");
            // getWine();
            console.log(wineType);
          }}
          type="submit"
        >
          Red
        </button>
        <button
          className="px-12 py-3 text-gray-800 bg-white ring-4 ring-black rounded-full hover:bg-black hover:text-white m-5 focus:ring-black focus:ring-4"
          onClick={() => {
            setWineType("whites");
            getWine();
            console.log(wineType);
          }}
          type="submit"
        >
          Whites
        </button>
        <button
          className="px-12 py-3 text-white bg-emerald-500 rounded-full hover:bg-emerald-600 m-5 font-medium text-xl focus:ring-emerald-300 focus:ring-4"
          onClick={() => {
            setWineType("sparkling");
            getWine();
            console.log(wineType);
          }}
          type="submit"
        >
          sparkling
        </button>
        <button
          className="px-12 py-3 text-white bg-pink-500 rounded-full hover:bg-pink-600 m-5 font-medium text-xl focus:ring-pink-300 focus:ring-4"
          onClick={() => {
            setWineType("rose");
            getWine();
            console.log(wineType);
          }}
          type="submit"
        >
          Rose
        </button>
      </div>
    </>
  );
};

export default Wines;
