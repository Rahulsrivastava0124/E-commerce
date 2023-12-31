import { connect } from "react-redux";
import ProtectedComponent from "../Component/ProtectedComponent";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedComponent);
