import { connect } from "react-redux";
import ProductCard from "../Component/ProductCard.jsx";
import { WishListToCart, RemoveWishList } from "../Services/Actions/Actions";


const mapStateToProps = (state, ownProps) => ({
  data: state,
});
const mapDispatchToProps = (dispatch)=>({
  AddTowishlist: (data) => dispatch(WishListToCart(data)),
  RemoveTowishlist: (data) => dispatch(RemoveWishList(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
