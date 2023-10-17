import { connect } from 'react-redux'
import component from '../Component/CheckOut'
import { OrderData, AddToCart } from '../Services/Actions/Actions'



const mapStateToProps = (state, ownProps) => ({
    data: state,
})

const mapDispatchToProps = (dispatch)=>({
    AddToOrderList:(data)=>(dispatch(OrderData(data))),
    AddToCartHandler: (data) => dispatch(AddToCart(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(component)
