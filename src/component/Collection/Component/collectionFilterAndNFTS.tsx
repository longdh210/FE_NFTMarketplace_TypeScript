import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilter from "../CollectionFilter/CollectionFilter";
import NFT from "../NFT/NFT";
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
        <div className="col-lg-2 px-0 green">
          {/*this component can be found in CollectionFilter folder */}
          {width > 992 ? <CollectionFilter /> : <SmallFilter />}
        </div>
        <div className="col-lg-10 red">
          <div className="row">
            {NFTs.map((item) => (
              <div className="col-lg-3 col-md-6 py-3 ">
                <NFT />
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
        className="btn btn-secondary dropdown-toggle container-fluid"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
        data-bs-auto-close="false"
      >
        Apply Filter
      </button>
      <div className="dropdown-menu position-relative filter-container">
        <CollectionFilter />
      </div>
    </div>
  );
};

export default CollectionFilterAndNFTS;