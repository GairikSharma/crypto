import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinContext } from "../context";
import LineChartComponent from "../components/Chart";
import "../styles/styles.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

function CoinDetails() {
  const { currency } = useContext(coinContext);
  const { id } = useParams();
  const [singleCoin, setSingleCoin] = useState(null);

  const fetchIndividualCoin = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      const res = await data.json();
      setSingleCoin(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(singleCoin);
  useEffect(() => {
    fetchIndividualCoin();
  }, [id]);

  if (!singleCoin) return <></>;
  return (
    <>
      <div className="coindetails-wrapper">
        <div className="left">
          <span
            style={{ color: "grey", marginTop: "10px", marginLeft: "10px" }}
          >
            Last updated on {Date().split("G")[0]}
          </span>
          <div className="coin-basic-details-wrapper">
            <div className="logo-wrapper">
              <img className="logo" src={singleCoin.image.large} alt="" />
            </div>
            <div className="name-id">
              <div className="name">{singleCoin.name}</div>
              <div className="id">({singleCoin.symbol.toUpperCase()})</div>
            </div>
          </div>
          <div className="currencyRank"># {singleCoin.market_cap_rank}</div>

          <div className="current_price">
            <span>Current Price</span> {currency ? "₹" : "$"}
            {singleCoin.market_data.current_price.inr}
          </div>
          <div 
          style={{marginLeft: "10px"}}
          className={singleCoin.market_data.market_cap_change_percentage_24h >= 0 ? "profit" : "loss"}>
            {singleCoin.market_data.market_cap_change_percentage_24h >= 0
              ? "+"
              : ""}
            {singleCoin.market_data.market_cap_change_percentage_24h.toFixed(2)}
          </div>

          <button className="addToWishList">
            <AiOutlineStar /> Add to wishlist
          </button>
          <button className="trackInPortfolio">
            <BsStopwatch /> Track in Portfolio
          </button>

          <div className="marketCap">Market cap: 22435356</div>
        </div>

        <div className="right">
          {/* <LineChartComponent /> */}
        </div>
      </div>
    </>
  );
}

export default CoinDetails;
