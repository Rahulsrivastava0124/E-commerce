import { connect } from 'react-redux'
import { Home } from "../Component/Home.jsx";
import { AddToCart } from '../Services/Actions/Actions.js';

const mapStateToProps = (state, ownProps) => ({
   data: state,
})

const mapDispatchToProps = (dispatch) => ({
   AddToCartHandler:(data)=>(dispatch(AddToCart(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)