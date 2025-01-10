import React, { createContext, useState } from "react";

export const KapraContext = createContext();
const KapraProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <KapraContext.Provider value={{ loading, setLoading }}>
            {children}
        </KapraContext.Provider>
    );
};

export default KapraProvider;