import React, { useRef, useState } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const optionTab = useRef(null);
  const [show, setShow] = useState("yes");
  const [keyword, setKeyword] = useState("Karachi");
  const [purpose, setPurpose] = useState("Sell");
  const [price, setPrice] = useState(100000000);
  const [landArea, setLandArea] = useState(100000000);

  const switchTabs = (e, tab) => {
    if (tab === "yes") {
      optionTab.current.classList.add("collapse-label");
      optionTab.current.classList.remove("null-container");
      setShow("yes");
    } else {
      optionTab.current.classList.add("null-container");
      optionTab.current.classList.remove("collapse-label");
      setShow("no");
    }
  };

  const City = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "peshawar"];
  const purposeCategories = ["Sell", "Rent"];
  const priceRent = [10000, 20000, 30000, 500000, 100000, 200000, 500000];
  const priceSale = [
    100000, 2000000, 4000000, 6000000, 800000, 1000000, 3000000, 5000000,
    10000000,
  ];
  const LandArea = [
    60, 120, 160, 200, 240, 360, 1000, 3000, 5000, 10000, 300000,
  ];

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/sell/${keyword}/${purpose}/${price}/${landArea}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="Search-container">
      <h1>Search Properties for Sale</h1>
      <form onSubmit={searchSubmitHandler}>
        <div className="options-container">
          <div className="first-row">
            <div className="drop-down">
              <label htmlFor="City"> City </label>

              <select onChange={(e) => setKeyword(e.target.value)}>
                <option value="">City</option>
                {City.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Location"
              className="collapse-label"
              onClick={(e) => switchTabs(e, show)}
            />
            {/* <button type="submit">FIND</button> */}
            <input type="submit" value="Search" />
          </div>

          <div className="second-row null-container" ref={optionTab}>
            <div className="drop-down">
              <label htmlFor="Purpose"> Purpose </label>
              <select onChange={(e) => setPurpose(e.target.value)}>
                <option value="">Choose Category</option>
                {purposeCategories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div className="drop-down">
              <label htmlFor="Price"> Price </label>
              <div className="min-max">
                <select
                  name="Min"
                  className="price-box"
                  id="Price-1"
                  placeholder="0"
                >
                  <option value="">0</option>
                </select>
                <p>to</p>
                {purpose === "Rent" ? (
                  <select onChange={(e) => setPrice(e.target.value)}>
                    <option value="">Max Price</option>
                    {priceRent.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select onChange={(e) => setPrice(e.target.value)}>
                    <option value="">Max Price</option>
                    {priceSale.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <div className="drop-down">
              <label htmlFor="Area"> Area (sy.yd)</label>
              <div className="min-max">
                <select name="Min" className="area-box" id="Area-1">
                  <option value="">0</option>
                </select>

                <p>to</p>
                <select onChange={(e) => setLandArea(e.target.value)}>
                  <option value="">Max Area</option>
                  {LandArea.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
