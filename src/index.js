import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'

import MyLoadable from './components/loader/myloadable'

import '../node_modules/normalize.css/normalize.css'
import './styles/css/index.css'

const target = document.querySelector('#root')

const App = MyLoadable({
  loader: () => import('./App')
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker();
