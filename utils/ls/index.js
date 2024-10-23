export const addItemToLs = (key, data) => {
  const JSONDATA = JSON.stringify(data);
  localStorage.setItem(key, JSONDATA);
};

export const getItemsFromLs = (key) => {
  const JSONDATA = localStorage.getItem(key);
  return JSON.parse(JSONDATA);
};
