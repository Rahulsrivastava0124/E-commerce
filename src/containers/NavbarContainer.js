import { connect } from "react-redux";
import { Navbar } from "../Component/Navbar.jsx";

const mapStateToProps = (state) => ({
  data: state,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
