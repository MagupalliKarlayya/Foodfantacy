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
    const apiUrl = process.env.REAST_APP_REST_API_URL;
    const data = await fetch(`${apiUrl}/${id}`);
    const jsondata = await data.json();
    setitemsname(jsondata?.data);
  }
  return { itemsname, error };
};

export default useRestItems;
