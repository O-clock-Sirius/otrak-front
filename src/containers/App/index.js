// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Import Action Creators
import { } from 'src/store/reducer';


const mapStateToProps = (state) => ({
  message: state.message,
  view: state.view,
});

const mapDispatchToProps = () => ({});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
