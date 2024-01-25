import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const AdminRoutes = () => {
    const { user, admin } = useAuth();
    const location = useLocation();
    if (!admin) { return <CircularProgress /> }
    return (
        user?.email && admin ? <Outlet /> : <Navigate to="/home" state={{ prevUrl: location.pathname }} />
    );
};

export default AdminRoutes;