import { useContext, useEffect, useState } from "react";
import { server } from "..";
import { Box } from "@chakra-ui/react";
import "../styles/styles.css";
import Loader from "../components/Loader";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { coinContext } from "../context";
import { useNavigate, useParams } from "react-router-dom";

function Coins() {
  
  const { coins, setCoins, page, setPage, currency, searchTerm } =
    useContext(coinContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const pageChange = (id) => {
    navigate(`/${id}`);
  };

  const [loading, setLoading] = useState(true);
  const fetchCoins = async () => {
    try {
      const data = await fetch(
        `${server}/coins/markets?vs_currency=${currency}&order=market_cap_desc`
      );
      const res = await data.json();
      setCoins(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [coins]);

  // console.log(coins.length);

  const nextPage = () => {
    if (page == 10) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const anyPage = (x) => {
    setPage(x);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {coins.filter((coin) => {
            return (
              coin.name &&
              coin.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }).slice(page * 10 - 10, page * 10).map((i) => {
            return (
              <>
                <Box
                  w={"220px"}
                  h={"220px"}
                  boxShadow="lg"
                  p="6"
                  rounded="md"
                  bg="white"
                  mt={2}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  key={i.id}
                  onClick={() => {
                    pageChange(i.id);
                  }}
                >
                  <img src={i.image} alt="" width={"100px"} />
                  <div>{i.name}</div>
                  <div>{i.symbol.toUpperCase()}</div>
                  <div>
                    {currency === "INR" ? "₹" : "$"}
                    {i.current_price}
                  </div>
                  <div
                    style={{ fontWeight: "500" }}
                    className={
                      i.price_change_percentage_24h >= 0 ? "profit" : "loss"
                    }
                  >
                    {i.price_change_percentage_24h >= 0 ? "+" : ""}
                    {i.price_change_percentage_24h?.toFixed(2)}%
                  </div>
                </Box>
              </>
            );
          })}
        </div>
      )}

      <Box className="pagination">
        {page > 1 && <FaAnglesLeft onClick={prevPage} />}
        {[...Array(coins.length / 10)].map((_, i) => {
          return (
            <span
              key={i}
              className={page === i + 1 ? "selected" : "not_selected"}
              id="page_number"
              onClick={() => {
                anyPage(i + 1);
              }}
            >
              {i + 1}
            </span>
          );
        })}
        <FaAnglesRight onClick={nextPage} />
      </Box>
    </>
  );
}

export default Coins;
