import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
    return (
        <main className="mt-8">
            <Outlet />
        </main>
    );
};

export default AuthLayout;
