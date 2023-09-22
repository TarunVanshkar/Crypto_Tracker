import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabComponents from "../Components/Dashboard/Tabs";
import Search from "../Components/Dashboard/Search";
import PaginationCount from "../Components/Dashboard/Pagination";
import Loader from "../Components/Common/Loader";
import BackToTop from "../Components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../Components/Common/Footer";

const Dashboard = () => {
  const [coins, setCoin] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, value) => {
    setPage(value);
    let priviousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(priviousIndex, priviousIndex + 10));
  };
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoin(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponents coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationCount page={page} handleChange={handleChange} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Dashboard;
