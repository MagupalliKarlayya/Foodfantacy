import { useState, useEffect } from "react";

const GetResturants = (data) => {
  const [filterrestaurant, setfilterrestaurant] = useState([]);
  const [restuerentlist, setrestuerentlist] = useState([]);
  const [error, seterror] = useState(null);

  useEffect(() => {
    getresturants();
  }, []);

  if (data) {
    setrestuerentlist(data);
  }

  async function getresturants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setrestuerentlist(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
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
