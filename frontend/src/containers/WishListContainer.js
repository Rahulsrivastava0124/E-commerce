import { connect } from "react-redux";
import { AddToCart, RemoveWishList } from "../Services/Actions/Actions";
import WishList from "../Component/UserComponents/UserWishList";

const mapStateToProps = (state, ownProps) => ({
    data: state
})
const mapDispatchToProps = (dispatch) => ({
    RemoveToWishListHandler: (data) => dispatch(RemoveWishList(data)),
    AddToCartHandler:(data)=>dispatch(AddToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(WishList);