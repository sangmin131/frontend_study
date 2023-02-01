import { useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
function DarkOrLight() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark');
    }else if (theme === 'dark'){
      setTheme('light');
    }
  };

  return (
    // ThemeContext의 값을 하위 컴포넌트들이 쓸 수 있겠끔 broadcast 해줌
    <ThemeContext.Provider value={{theme: theme, themes: themes,  toggleTheme:toggleTheme}}>
      <MainContent/>
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;