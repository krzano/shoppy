import { useRef, useEffect } from 'react';

const useClickOutside = (handlerFunction) => {
	const elementRef = useRef();
	useEffect(() => {
		const handler = (event) => {
			// console.log(event.target);
			if (!elementRef.current.contains(event.target)) {
				handlerFunction();
			}
		};
		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	return elementRef;
};

export default useClickOutside;
