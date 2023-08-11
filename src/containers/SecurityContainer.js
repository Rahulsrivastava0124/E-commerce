import { connect } from 'react-redux'
import LoginSecurity from '../Component/UserSecurity.jsx'

const mapStateToProps = (state, ownProps) => ({
    data:state,
    ownProps
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSecurity)