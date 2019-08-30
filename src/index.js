import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


function* getMovies() {
    try{
        //GRABS MOVIES DATA FROM DATABASE
        let response = yield axios.get(`/movies`)
        console.log('in get saga:', response.data)
        //ANYTHING WITH TYPE 'SET MOVIES' COMES HERE AND SENDS TO REDUCER
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch(error) {
        console.log('error in get saga', error)
    }
}


// Create the rootSaga generator function
function* watcherSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
//
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        //REDUCERS NEED TO BE CALLED IN HERE TO WORK
        moviesReducer,
        genresReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
