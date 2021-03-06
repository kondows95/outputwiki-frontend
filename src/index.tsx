import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { IntlProvider } from 'react-intl';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="en">
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
