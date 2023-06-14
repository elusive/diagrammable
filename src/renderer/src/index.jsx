import React from 'react'
import ReactDOM from 'react-dom'
import '/src/assets/index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Main } from './views'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Main />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
