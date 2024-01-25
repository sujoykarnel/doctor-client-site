import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const ProtectRoutes = () => {
    const { user, isLoading } = useAuth();
    const location = useLocation()
    if (isLoading) { return <CircularProgress /> }
    return (
        user?.email ? <Outlet /> : <Navigate to="/login" state={{ prevUrl: location.pathname }} />
    );
};

export default ProtectRoutes;