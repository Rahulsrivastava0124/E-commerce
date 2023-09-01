import { connect } from 'react-redux'
import component from '../Component/OrderSummery'
import { RemoveToCart } from "../Services/Actions/Actions";

const mapStateToProps = (state, ownProps) => ({
    data:state,

})

const mapDispatchToProps = (dispatch)=>({
    RemoveToCartHandler: (data) => dispatch(RemoveToCart(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(component)
