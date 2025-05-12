import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './thunkRootReducer';
import { useDispatch } from 'react-redux';
// Setup for Redux DevTools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure middleware
const middleware = [thunk as unknown as ThunkMiddleware<RootState>];



// Create the store with persisted reducer and middleware
const storeThunk = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);




// Custom hook for dispatch
export type AppDispatch = typeof storeThunk.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export type AppDispatch = typeof store.dispatch;
export default storeThunk;