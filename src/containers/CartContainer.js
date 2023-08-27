import { connect } from "react-redux";
import {  RemoveToCart } from "../Services/Actions/Actions";
import  UserCartAndWishList  from "../Component/UserComponents/UserCartAndWishList";

const mapStateToProps = (state, ownProps) => ({
    data: state
})
const mapDispatchToProps = (dispatch) => ({
    RemoveToCartHandler: (data) => dispatch(RemoveToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCartAndWishList);