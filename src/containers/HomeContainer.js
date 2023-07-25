import { connect } from 'react-redux'
import {Home} from "../Component/Home.jsx";
import {ProductData} from "../Services/Actions/Actions";

const mapStateToProps = (state, ownProps) => ({
   data:state,
})

const mapDispatchToProps =(dispatch)=> ({
    StoreProductData: (data) => dispatch(ProductData(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)