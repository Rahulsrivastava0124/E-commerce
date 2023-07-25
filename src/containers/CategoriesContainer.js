import { connect } from "react-redux";
import { Categories } from "../Component/Categories.jsx";
import { Home } from "../Component/Home.jsx";

const mapStateToProps = (state, ownData) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Categories, Home);
