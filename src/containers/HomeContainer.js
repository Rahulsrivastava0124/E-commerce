import { connect } from 'react-redux'
import {Home} from "../Component/Home.jsx";

const mapStateToProps = (state, ownProps) => ({
   data:state,
})

const mapDispatchToProps =(dispatch)=> ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)