import { useState, useEffect } from "react";

const GetResturants = () => {
  const [filterrestaurant, setfilterrestaurant] = useState([]);
  const [restuerentlist, setrestuerentlist] = useState([]);
  const [error, seterror] = useState(null);

  useEffect(() => {
    getresturants();
  }, []);

  async function getresturants() {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const data = await fetch(`${apiUrl}/swiggy`);

      // const jsondata = fetch(

      // )
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
      //   .catch((error) => console.error("Error:", error));

      const json = await data.json();
      setrestuerentlist(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(json1);
      setfilterrestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      seterror(error.message);
    }
  }

  return { restuerentlist, filterrestaurant, error, setrestuerentlist };
};

export default GetResturants;
