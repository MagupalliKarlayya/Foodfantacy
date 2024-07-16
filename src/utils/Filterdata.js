export function Fitlertheitems(Searchitem, restuerentlist, filterrestaurant) {
  restuerentlist = filterrestaurant;
  const modifysearchitem = Searchitem.toLowerCase();
  const filterdata = restuerentlist.filter((res) => {
    return res.info.name.toLowerCase().includes(modifysearchitem);
  });
  return filterdata;
}
