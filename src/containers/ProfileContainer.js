import { connect } from "react-redux";
import { Profile } from "../Component/Profile.jsx";

const mapStateToProps = (state, ownProps) => ({
  data: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
