import React, { useState, useEffect } from "react";
import Form from "./Form";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Header = ({ history }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm(item);
  };

  const handleFormSubmit = (searchEntry) => {
    setSelectedItem(searchEntry);
    setSearchTerm(searchEntry);
  };

  useEffect(() => {
    // Set the selected item initially based on the path
    const path = history.location.pathname;
    const item = path.substr(1); // Remove the leading slash
    setSelectedItem(item);
    setSearchTerm(item);
  }, [history.location.pathname]);

  return (
    <>
      <div>
        <h1 className="title">SnapShot</h1>
        <center>
          <Form history={history} handleSubmit={handleFormSubmit} />
        </center>
        <div className="main-nav1">
          <nav>
            <NavLink to="/">
              <button
                className={selectedItem === "mountain" ? "selected" : ""}
                onClick={() => handleItemClick("mountain")}
              >
                Mountain
              </button>
            </NavLink>
          </nav>
          <nav>
            <NavLink to="/beach">
              <button
                className={selectedItem === "beach" ? "selected" : ""}
                onClick={() => handleItemClick("beach")}
              >
                Beaches
              </button>
            </NavLink>
          </nav>
          <nav>
            <NavLink to="/bird">
              <button
                className={selectedItem === "bird" ? "selected" : ""}
                onClick={() => handleItemClick("bird")}
              >
                Birds
              </button>
            </NavLink>
          </nav>
          <nav>
            <NavLink to="/food">
              <button
                className={selectedItem === "food" ? "selected" : ""}
                onClick={() => handleItemClick("food")}
              >
                Food
              </button>
            </NavLink>
          </nav>
          <nav>
            <NavLink to="/MARVELHEROS">
              <button
                className={selectedItem === "marvel" ? "selected" : ""}
                onClick={() => handleItemClick("marvel")}
              >
                MARVEL HEROS
              </button>
            </NavLink>
          </nav>
        </div>
      </div>
      {selectedItem && !searchTerm && (
        <>
          <h2 className="picname">{selectedItem} Pictures</h2>
          <Container searchTerm={selectedItem} />
        </>
      )}
      {searchTerm && (
        <>
          <h2 className="picname">{searchTerm} Pictures</h2>
          <Container searchTerm={searchTerm} />
        </>
      )}
    </>
  );
};

export default Header;
