import { createContext, useContext, useState } from 'react';

// create themeContext
const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context; 
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
