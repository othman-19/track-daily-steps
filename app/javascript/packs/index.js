import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { Provider } from 'react-redux';
import App from "../components/App";

const initialState = {
  goals: [{}],
  current_user: {}
}

const store = createStore(rootReducer, initialState);

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});