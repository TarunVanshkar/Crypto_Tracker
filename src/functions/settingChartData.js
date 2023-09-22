import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1.map((price) => price[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          // prices ? "transparent" :
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto 2",
          data: prices2.map((price) => price[1]),
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          // prices ? "transparent" :
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          // prices ? "transparent" :
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
