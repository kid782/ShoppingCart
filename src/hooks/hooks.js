import { useState, useEffect } from "react";

export function useSrollLock() {
    const [scrollActive, setScrollActive] = useState(true);

	useEffect(() => {
		if (!scrollActive) {
			document.querySelector('body').classList.add('scroll-disabled');
		}
		return () => document.querySelector('body').classList.remove('scroll-disabled');
	}, [scrollActive])
    
    return [scrollActive, setScrollActive];
}