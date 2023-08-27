import { connect } from "react-redux";
import ProductCard from "../Component/CardComponents/ProductCard";
import { WishListToCart, RemoveWishList, AddToCart } from "../Services/Actions/Actions";

const mapStateToProps = (state, ownProps) => ({
  data: state,
});
const mapDispatchToProps = (dispatch) => ({
  AddTowishlist: (data) => dispatch(WishListToCart(data)),
  RemoveTowishlist: (data) => dispatch(RemoveWishList(data)),
  AddToCartHandler: (data) => dispatch(AddToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductCard,
);
