import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './components/App/App';
import StartPage from './components/StartPage/StartPage';
import { MainProvider } from './stores/MainStore';

const routes = mount({
  '/': route({
    title: 'Conversational Chinese',
    view: (
      <MainProvider>
        <StartPage />
      </MainProvider>
    )
  })
});

ReactDOM.render(
  <Router routes={routes}>
    <App>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
