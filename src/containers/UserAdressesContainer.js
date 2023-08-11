import { connect } from "react-redux";
import Addresses from "../Component/UserAddresses";

const mapStateToProps = (state, ownProps) => ({
  data: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
