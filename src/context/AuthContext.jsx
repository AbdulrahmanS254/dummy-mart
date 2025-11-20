import {
    useContext,
    createContext,
    useReducer,
    useEffect,
    Children,
    useState,
} from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        let userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
