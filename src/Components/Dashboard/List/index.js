import React, { useState } from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IconButton, Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { removeWatchlist } from "../../../functions/removeWatchlist";
import { addWatchList } from "../../../functions/addWatchList";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { checkAdded } from "../../../functions/checkAdded";
import { motion } from "framer-motion";

const List = ({ coin, isWatchlistPage, delay }) => {
  const [added, setAdded] = useState(checkAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        style={{ display: isWatchlistPage && !added && "none" }}
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip placement="bottom-start" title="Image">
          <td className="td-img">
            <img src={coin.image} alt="coinimage" className="coin-image" />
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Info">
          <td className="td-info-flex">
            <div className="coin-name-flex coin-flex">
              <h3 className="coin-symbol coin-symbol-list">{coin.symbol}</h3>
              <p className="coin-name coin-name-list">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Price">
          <td className="td-price-chip-list">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
              </div>
            ) : (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trending-icon-list trending-icon" />
              </div>
            )}
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Curent Price">
          <td>
            <p
              className={`coin-price coin-price-list desktop-price ${coin.price_change_percentage_24h < 0 && "coin-price-red"
                }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-price coin-price-list mobile-price ${coin.price_change_percentage_24h < 0 && "coin-price-red"
                }`}
            >
              $
              {convertNumbers(
                coin.current_price < 1
                  ? parseFloat(coin.current_price).toFixed(3)
                  : parseInt(coin.current_price)
              )}
            </p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Total Volume">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              {coin.total_volume.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-td-cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${convertNumbers(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeWatchlist(coin.id);
                setAdded(false);
              } else {
                addWatchList(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
              />
            )}
          </IconButton>
        </td>
      </motion.tr>
    </Link>
  );
};

export default List;
