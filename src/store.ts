import { applyMiddleware, createStore, type Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import {
  createUseEffect,
  createUseLayoutEffect,
  createUseState,
  creatSvelteReduxStore,
} from 'svelte-redux-store'; //import this line

export type AppState = ReturnType<typeof rootReducers>;

const initialState = {};

const middleware: Middleware[] = [thunk];

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducers, initialState, devTools);

/**
 * If you use <Provider> (version 2.0.0 or latest).
 * You can import { method } from 'svelte-redux-store';
 * You don’t need to create svelte redux store
 */
// create svelte redux store
export const {
  useStore,
  useDispatch,
  useSelector,
  useFeatureSelector,
  useSubscribe,
} = creatSvelteReduxStore<AppState>(store);

// create useState (if you want)
export const { useState } = createUseState();
// OR
// import {useState} from 'svelte-redux-store';

// create useEffect (if you want)
export const { useEffect } = createUseEffect();
// OR
// import {useEffect} from 'svelte-redux-store';

// create useLayoutEffect (if you want)
export const { useLayoutEffect } = createUseLayoutEffect();
// OR
// import {useLayoutEffect} from 'svelte-redux-store';