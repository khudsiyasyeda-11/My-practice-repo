import React from "react";
import { connect } from "react-redux";
import { buyMobile } from "./MobileAction";
import { addMobile } from "./AddMobileAction";

const MobileContainer = (props) => {
  return (
    <div className="container p-5 ">
      <h1>No of Mobiles : {props.mobiles}</h1>
      <h4>
        {props.mobiles >= 5
          ? "Available"
          : props.mobiles <= 0
          ? "Out of Stock"
          : "Limited Stock"}
      </h4>
      <button
        onClick={props.buyMobile}
        disabled={props.mobiles === 0 ? true : false}
      >
        Buy Now
      </button>
      <button onClick={props.addMobile}>Add Mobile</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyMobile: () => {
      dispatch(buyMobile());
    },
    addMobile: () => {
      dispatch(addMobile());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
