import { connect } from 'react-redux'
import { PreviewProduct } from '../Component/CardComponents/PreviewProduct'
import { AddToCart ,RemoveToCart} from '../Services/Actions/Actions'

const mapStateToProps = (state, ownProps) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => ({
    AddToCartHandler: (data) => dispatch(AddToCart(data)),
    RemoveToCartHandler: (data) => dispatch(RemoveToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewProduct)
