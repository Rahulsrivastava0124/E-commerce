import { connect } from "react-redux";
import ProtectedComponent from "../Component/ProtectedRoutes/ProtectedComponent";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedComponent);
