import { connect } from 'react-redux'
import LoginSecurity from '../Component/UserComponents/UserSecurity'

const mapStateToProps = (state, ownProps) => ({
    data:state,
    ownProps
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSecurity)