import React from "react";
import "../../../styles/pages/Collection/collectionModalComponent.scss";
import ETH from "../../../asset/eth.svg";
const collectionBuyModalComponentRadio = (props: any) => {
  return (
    <div className="d-flex justify-content-start align-items-center container-fluid p-0 my-1">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault"
      />
      <div className="radio-box-container-img  mx-2">
        <img src={ETH} alt="method" className="radio-img " />
      </div>
      <div className="radio-payment-method">{props.method}</div>
    </div>
  );
};

export default collectionBuyModalComponentRadio;
