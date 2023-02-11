import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// private route prevents unauthorised users to enter the dashboard

function PrivateRoute({ children }) {
    const auth = true;
    return !auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;