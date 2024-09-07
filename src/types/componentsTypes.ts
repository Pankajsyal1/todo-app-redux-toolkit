import { ReactNode } from "react";

// Define the props type for the Card component
export interface CustomComponentProps {
    children: ReactNode;
}


export interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "reset" | "button";
    className: string;
    block?: boolean;
}