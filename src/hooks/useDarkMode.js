import { useEffect } from "react";
import  useLocoalStorage  from './useLocoalStorage';


const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocoalStorage (key);
    useEffect (() => {
        if (darkMode === true){
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        };
    }, [darkMode])

    return [darkMode, setDarkMode]
      
}


export default useDarkMode;