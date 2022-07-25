import React from "react";
import { connect } from "react-redux";
import { setIsSelectorOpen } from "../store/actions/actions";
import { CurrencyButton, Header } from "./components.style";
import NavBar from "./NavBar";

function HeaderComponent(props) {
  return (
    <Header>
      <div>
        {" "}
        Base Currency:{" "}
        <CurrencyButton onClick={() => props.setIsSelectorOpen(true)}>
          {props.chosenCurrency}
        </CurrencyButton>
      </div>
      <NavBar />
    </Header>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setIsSelectorOpen: (isOpen) => dispatch(setIsSelectorOpen(isOpen)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
