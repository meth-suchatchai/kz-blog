'use client';
import { useEffect, useRef } from 'react';

const KONAMI_CODE = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
];

export const useKonamiCode = (callback: () => void) => {
	const position = useRef(0);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === KONAMI_CODE[position.current]) {
				position.current += 1;
				if (position.current === KONAMI_CODE.length) {
					callback();
					position.current = 0;
				}
			} else {
				position.current = 0;
			}
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [callback]);
};
