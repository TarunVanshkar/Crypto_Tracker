import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { get100Coins } from "../../../functions/get100Coins";
import "./style.css";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };
  return (
    <div className="select-flex">
      <p className="select-info">Crypto 1</p>
      <Select
        className="select-coin"
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": { color: "var(--white)" },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        value={crypto1}
        label="crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
          .filter((item) => item.id !== crypto2)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
      <p className="select-info">Crypto 2</p>
      <Select
        className="select-coin"
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": { color: "var(--white)" },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        value={crypto2}
        label="crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
          .filter((item) => item.id !== crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
