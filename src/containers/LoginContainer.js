import { connect } from "react-redux";
import Login from "../Component/Login.jsx";
import { UserLogin } from "../Services/Actions/Actions.js";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToLoginHandler: (data) => dispatch(UserLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
