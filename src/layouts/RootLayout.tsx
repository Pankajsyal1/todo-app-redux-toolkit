import TheFooter from "@/components/common/TheFooter";
import TheHeader from "@/components/common/TheHeader";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <>
            <TheHeader />
            <main className="mt-8">
                <Outlet />
            </main>
            <TheFooter />
        </>
    );
};

export default RootLayout;
