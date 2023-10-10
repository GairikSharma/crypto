import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { server } from "..";
import { Select, Button } from "@chakra-ui/react";
import { coinContext } from "../context";
import { Input } from '@chakra-ui/react'
// import { server } from "..";

function Navbar() {
  const { currency, coins, setCoins, setCurrency, searchTerm, setSearchTerm } = useContext(coinContext);
  // const fetchCoin = async () => {
  //   const data = await fetchCoin(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc`);
  //   const res = await data.json();
  //   setCoins(res);
    
  // }
  // useEffect(()=>{fetchCoin()},[])
  // console.log(coins);
  // const handleSearch = () => {
  //   return coins.filter((val) => {
  //           // if(search == "") {
  //           //   return val;
  //           // }else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
  //           //   return val
  //           // }
  //           if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
  //             setCoins(val);
  //           }
  //         })
  // }
  // {
  //   coins.filter((i) => {
  //     if (i.name.toLowerCase().includes(search)) {
  //       setCoins(i)
  //       return <>
  //       <div>{i.symbol}</div>
  //       </>
  //     }
  //   })
  // }

  // {
  //   coins.filter((i) => {
  //     if (search == "") {
  //       return i;
  //     }
  //     else if (i.name.toLowerCase().includes(search.toLowerCase())) {
  //       console.log('found');
  //       // console.log(i.id)
  //     }
  //   })
  // }

  return (
    <>
      <Box
        w={"100%"}
        h={"64px"}
        bg={"black"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
      >
        
        <Box
          w={"50%"}
          h={"64px"}
          bg={"black"}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          color={"white"}
        >
          <Box ml={4}>
            <Link to="/">Home</Link>
          </Box>
          <Box ml={4}>
            <Link to="/coins">Coins</Link>
          </Box>
          {/* <Box ml={4}>
            <Link to="/coindetails">Coindetails</Link>
          </Box> */}
        </Box>

        <Box
          w={"50%"}
          h={"64px"}
          pr={4}
          bg={"black"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          color={"white"}
        >
          <Input onChange={(e)=>{setSearchTerm(e.target.value);console.log(e.target.value);}} w={"30%"} mr={4} placeholder='Search here' size='md' />
          <Select w={"20%"} size="md" onChange={(e) => {
                const selectedCurr = e.target.value;
                setCurrency(selectedCurr);
              }}>
            <option
              value={"INR"}
              style={{ color: "black" }}
              
            >
              INR
            </option>
            <option
              value={"USD"}
              style={{ color: "black" }}
              
            >
              USD
            </option>
            {/* {
              currency.map((i) => (
                <option value={currency.i} key={i}>{i.name}</option>
              ))
            } */}
          </Select>
        </Box>
      </Box>
      {/* <Box>
        {handleSearch()}
      </Box> */}
    </>
  );
}

export default Navbar;
