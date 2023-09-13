"use client";
import { createContext, useState } from "react";
import { ReactNode } from "react";

interface ChildProp {
    isAuth: boolean;
    setIsAuth: any;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<ChildProp | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");

    const login = (token: string) => {
        console.log("token from authprovider", token);
        setIsAuth(true);
        setToken(token);
    };

    const logout = () => {
        setIsAuth(false);
        setToken("");
    };

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
