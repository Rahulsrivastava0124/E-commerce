import { connect } from "react-redux";
import { Profile } from "../Component/Profile.jsx";
import { UserLogin } from "../Services/Actions/Actions.js";

const mapStateToProps = (state, ownProps) => ({
  data: state,
  ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  UserLogOutHandler: (data) => dispatch(UserLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
