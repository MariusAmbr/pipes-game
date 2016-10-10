import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducers from '../reducers';
import { initialStates } from '../reducers';


export default function configureStore() {

    const {game} = initialStates;

    const initialState = {
        game
    }

    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            devTools()
        )
    );

    if (module.hot) {
        // Enable hot module replacement for reducers
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
