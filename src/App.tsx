import { TwitterContainer } from './view/containers';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <TwitterContainer />
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable={false}
      />
    </>
  );
}

export default App;
