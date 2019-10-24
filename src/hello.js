import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

const XYZ = ({a, b}) =>
    <h1>{a + b}</h1>

const QWE = connect(
    state => ({
        a: state.x,
        b: state.y
    })
)(XYZ)

const ewq = createStore(() => ({
    x: 123,
    y: 234
}))

ReactDOM.render(
    <Provider store={ewq}>
        <QWE/>
    </Provider>,
    document.getElementById('root'));