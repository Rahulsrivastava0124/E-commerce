import { connect } from "react-redux";
import Login from "../Component/Login.jsx";
import { AddToCart } from "../Services/Actions/Actions";

const mapStateToProps = (state) => ({
  data: state.CardItems.cardData,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(AddToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
