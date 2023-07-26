import { connect } from "react-redux";
import { Categories } from "../Component/Categories.jsx";

const mapStateToProps = (state, ownData) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
