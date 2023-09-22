import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log("coin");
      return response.data;
    })
    .catch(() => {
      console.log("error");
    });
  if (myData) return myData;
  else return;
};
