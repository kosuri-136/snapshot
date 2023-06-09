

import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import "../styles/Container.css";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    if (searchTerm) {
      runSearch(searchTerm);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
            {/* {searchTerm && <h2 className="picname">{searchTerm} Pictures</h2>} */}
          <div className="photo-container">
            
            <Gallery data={images} />
          </div>
        </>
      )}
    </>
  );
};

export default Container;
