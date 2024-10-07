import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="timer">Timer</Link>
            </nav>
            <Outlet /> {/* Para mostrar las rutas anidadas */}
        </div>
    );
};

export default Dashboard;
