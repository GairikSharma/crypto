import React from "react";
import { Spinner } from "@chakra-ui/react";
import "../styles/loader.css";
import "../styles/styles.css"

function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="animation-container">
          <div className="y-axis-container">
            <div className="containerx">
              <div className="flash"></div>
              <div className="coin side">
                <div className="shine" style={{transform:"rotate(-30deg);"}}></div>
              </div>
              <div className="side-coin"></div>
              <div className="coin">
                <div className="dai">
                  <div className="inner-dai">
                    <div className="inner-inner-dai"></div>
                  </div>
                  <div className="cutout"></div>
                  <div className="dai-shadow"></div>
                </div>
                <div className="shine"></div>
              </div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
        {/* <Spinner w={"150px"} h={"150px"} thickness="4px" speed="0.65s" color="black.500" size="xl" /> */}
      </div>
    </>
  );
}

export default Loader;
