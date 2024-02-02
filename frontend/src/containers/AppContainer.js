import { connect } from "react-redux";
import App from "../App";
import { UserLogin } from "../Services/Actions/Actions.js";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  UserTokenLoginHandler: (data) => dispatch(UserLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);