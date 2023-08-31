import { connect } from 'react-redux'
import { CartCanvas } from '../Component/Navbar/CartCanvas'


const mapStateToProps = (state, ownProps) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CartCanvas)
