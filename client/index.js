import React from 'react';
import { render } from 'react-dom';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

import './style/index.css';

const App = () => {
    return <h1>
        Proyect React-Express
    </h1>
}

render(
    <App/>,
    document.getElementById('app')  
);