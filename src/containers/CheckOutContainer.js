import { connect } from 'react-redux'
import component from '../Component/CheckOut'
import { OrderData, RemoveToCart } from '../Services/Actions/Actions'



const mapStateToProps = (state, ownProps) => ({
    data: state,
})

const mapDispatchToProps = (dispatch)=>({
    AddToOrderList:(data)=>(dispatch(OrderData(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(component)
