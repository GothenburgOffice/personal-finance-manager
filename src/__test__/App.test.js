import React from 'react';
import { shallow } from 'enzyme'
import App from '../App'
import configureStore from 'redux-mock-store'

const initialState = {}
const mockStore = configureStore()
const store = mockStore(initialState)

it('renders without crashing', () => {
  shallow(<App store={store} />)
})
