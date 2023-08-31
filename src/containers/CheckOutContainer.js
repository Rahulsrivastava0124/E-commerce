import { connect } from 'react-redux'
import component from '../Component/CheckOut'
import { RemoveToCart } from '../Services/Actions/Actions'



const mapStateToProps = (state, ownProps) => ({
    data: state,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(component)
