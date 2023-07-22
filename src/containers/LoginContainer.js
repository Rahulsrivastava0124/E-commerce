import { connect } from "react-redux";
import Login from "../Component/Login.jsx";
import {UserLogin } from "../Services/Actions/Actions";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(UserLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
