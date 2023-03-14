import { createStore } from "redux";
import { rootReducer } from "./reducer";

const store = createStore(rootReducer);

export { store };

// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export { store };