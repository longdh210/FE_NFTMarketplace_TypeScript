import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilter from "../CollectionFilter/collectionFilter";
import CollectionNFT from "../NFT/collectionNFT";
const CollectionFilterAndNFTS = () => {
  //getting window size
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const NFTs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-2 px-0 ">
          {/*this component can be found in CollectionFilter folder */}
          {width > 992 ? <CollectionFilter /> : <SmallFilter />}
        </div>
        <div className="col-lg-10 ">
          <div className="row">
            {NFTs.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6 py-3  ">
                <CollectionNFT />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SmallFilter = () => {
  return (
    <div className="dropdown filter-button">
      <button
        className="btn small-screen-filter dropdown-toggle container-fluid"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
        data-bs-auto-close="false"
      >
      Filter
      </button>
      <div className="dropdown-menu mt-2 position-relative filter-container px-3">
        <CollectionFilter />
      </div>
    </div>
  );
};

export default CollectionFilterAndNFTS;
