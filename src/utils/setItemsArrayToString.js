export const setItemsArrayToString = (items) => {
  const itemsArray = [];
  items.map((item) => itemsArray.push(item.name || item.original_title));
  const itemsString = itemsArray.toString().replaceAll(",", ", ");
  return itemsString;
};
