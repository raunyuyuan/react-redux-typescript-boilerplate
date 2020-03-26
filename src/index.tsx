import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root')

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    MOUNT_NODE
  );
}

render()

// @ts-ignore
if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  // @ts-ignore
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE as HTMLDivElement);
    render()
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
