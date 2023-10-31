import { connect } from 'react-redux'
import component from '../Component/OrderSummery'
import { RemoveToCart,AddToCart } from "../Services/Actions/Actions";

const mapStateToProps = (state, ownProps) => ({
    data:state,

})

const mapDispatchToProps = (dispatch)=>({
    RemoveToCartHandler: (data) => dispatch(RemoveToCart(data)),
    AddToCartHandler: (data) => dispatch(AddToCart(data))


})

export default connect(mapStateToProps, mapDispatchToProps)(component)
