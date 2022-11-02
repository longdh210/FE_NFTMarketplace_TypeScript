import React from "react";
import Info from "../../asset/info1.svg";
import "../../styles/pages/Mint/mintComponent.scss";

interface mintComponent {
  name: string;
  requireField: boolean;
  placeholder: string;
  description: string | null;
  icon: boolean;
  textfield: boolean;
  tooltip: string | null;
}
const mintComponent = (props: mintComponent) => {
  return (
    <div>
      <div>
        {props.name}
        {props.requireField ? <div>*</div> : null}
      </div>
      <div>
        {props.description}
        {props.icon ? (
          <i className="bi bi-info-circle-fill mint-info-icon custom-tooltip">
            <span className="tooltiptext">{props.tooltip}</span>
          </i>
        ) : null}
      </div>
      {!props.textfield ? (
        <form>
          <textarea placeholder={props.placeholder} maxLength={1000}>
            This is the default comment...
          </textarea>
        </form>
      ) : (
        <form>
          <input type="text" placeholder={props.placeholder} />
        </form>
      )}
    </div>
  );
};

export default mintComponent;
