import { connect } from 'react-redux'
import LoginSecurity from '../Component/ProfileComponents/Security.jsx'

const mapStateToProps = (state, ownProps) => ({
    data:state
})

const mapDispatchToProps = {
    
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginSecurity)