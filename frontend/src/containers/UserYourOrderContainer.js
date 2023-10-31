import { connect } from 'react-redux'
import  UserYourOrder  from "../Component/UserComponents/UserYourOrder"

const mapStateToProps = (state, ownProps) => ({
    data: state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserYourOrder)
