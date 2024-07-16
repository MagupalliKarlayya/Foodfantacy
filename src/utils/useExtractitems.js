import { useEffect, useState } from "react";

const useRestItems = (id) => {
  const [error, seterror] = useState(false);
  const [itemsname, setitemsname] = useState(null);

  useEffect(() => {
    try {
      extractitems();
    } catch (error) {
      seterror(error.message);
    }
  }, [id]);

  async function extractitems() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsondata = await data.json();
    setitemsname(jsondata?.data);
  }
  console.log(itemsname);
  return { itemsname, error };
};

export default useRestItems;
