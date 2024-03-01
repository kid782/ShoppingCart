import { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext(null);


const ScrollProvider = ({children}) => {
	const [scrollActive, setScrollActive] = useState(true);
	useEffect(() => {
		if (!scrollActive) {
			document.querySelector('body').classList.add('scroll-disabled');
		}
		return () => document.querySelector('body').classList.remove('scroll-disabled');
	}, [scrollActive])
	return (
		<ScrollContext.Provider value={{scrollActive, setScrollActive}}>
			{children}
		</ScrollContext.Provider>
	)
}

export const useScrollContext = () => useContext(ScrollContext);

export default ScrollProvider;