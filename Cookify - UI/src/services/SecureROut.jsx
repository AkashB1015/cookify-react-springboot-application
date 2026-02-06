
export const AdminRoute = ({ children }) => {

    const data = JSON.parse(localStorage.getItem("customer") || "{}");

    if (!data.role) {

        return <Navigate to="/login" replace />;

    }

    if (data.role.toLowerCase() !== "admin") {

        return <Navigate to="/home" replace />;
        
    }

    return children;
};

export const CustomerRoute = ({ children }) => {

    const data = JSON.parse(localStorage.getItem("customer") || "{}");

    if (!data.role) {

        return <Navigate to="/login" replace />;

    }
    if (data.role.toLowerCase() !== "customer") {

        return <Navigate to="/admin" replace />;

    }

    return children;
};