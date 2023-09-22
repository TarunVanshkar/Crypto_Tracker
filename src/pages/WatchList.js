import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponents from "../Components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import Loader from "../Components/Common/Loader";
import Button from "../Components/Common/Button";
import { Link } from "react-router-dom";

const WatchList = () => {
  const coins = localStorage.getItem("watchlist");
  const [watchLits, setWatchList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoins();
  }, []);

  async function getCoins() {
    setLoading(true);
    const allcoins = await get100Coins();
    if (coins && allcoins) {
      setWatchList(allcoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  }
  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {watchLits?.length === 0 || !coins ? (
            <div>
              <Header />
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  color: "var(--white)",
                }}
              >
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/dashboard">
                  <Button text={"Dashboard"} outlined={false} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabComponents coins={watchLits} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WatchList;
