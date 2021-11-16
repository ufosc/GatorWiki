import logo from './logo.svg';
import './App.css';
import './style.css';
import React, { useEffect, useState } from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="sidebar">
                </div>
                <div className="header">
                </div>
                <div className="content">
                </div>
                <div className="footer">
                </div>
            </div>
        );
    }
}

function App() {
    return <HomePage />;
}

export default App;
