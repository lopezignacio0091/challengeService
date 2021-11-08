import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainRoute from './route/MainRoute';
import { Provider } from 'react-redux';
import store from './store';
import Transacction from './components/pages/TransactionPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainRoute />
      </Router>
     {/* <Transacction></Transacction> */}
    </Provider>
  );
}

export default App;

