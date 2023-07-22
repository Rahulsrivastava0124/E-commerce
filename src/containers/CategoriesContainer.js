import { connect } from 'react-redux'
import {Categories} from '../Component/Categories.jsx';
import { WishListToCart,RemoveWishList } from "../Services/Actions/Actions";

const mapStateToProps = (state) => ({
    data:state,
})

const mapDispatchToProps =(dispatch)=> ({
   AddTowishlist:(data)=>dispatch(WishListToCart(data)),
   RemoveTowishlist:(data)=>dispatch(RemoveWishList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)