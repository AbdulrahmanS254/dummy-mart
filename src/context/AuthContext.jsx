import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        let userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    });

    const navigate = useNavigate();
    
    // saving user data in local storage
    useEffect(() => {
        user
            ? localStorage.setItem("user", JSON.stringify(user))
            : localStorage.removeItem("user");
    }, [user]);

    // Login handling
    const loginAction = async (data) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Invalid username or password");
            }

            const result = await response.json();

            setUser(result);
        } catch (err) {
            throw err;
        }
    };

    const logOut = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
