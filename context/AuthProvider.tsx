"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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

    const value = { isAuth, setIsAuth, login, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
