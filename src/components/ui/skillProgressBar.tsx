'use client';
import { useEffect, useRef, useState } from 'react';

export type ProgressBarProps = {
	name: string;
	level: number;
	color: string;
};

const SkillProgressBar = (props: ProgressBarProps) => {
	const [width, setWidth] = useState(0);
	const [inView, setInView] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => setInView(entry.isIntersecting),
			{ threshold: 0.5 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (inView && width == 0) {
			const timer = setTimeout(() => setWidth(props.level + 1), 200);

			return () => clearTimeout(timer);
		}
	}, [inView, props.level, width]);

	return (
		<div key={props.name}>
			<div ref={ref} className="flex justify-between items-center mb-2">
				<span className="font-pixel text-sm text-[var(--pixel-white)]">
					{props.name}
				</span>
				<span className="font-pixel text-xs text-[var(--pixel-green)]">
					{props.level}%
				</span>
			</div>
			<div className="w-full h-4 bg-pixel-black border border-pixel-green">
				<div
					className={`h-full ${props.color} transition-all duration-1000 ease-out`}
					style={{ width: `${width}%` }}
				></div>
			</div>
		</div>
	);
};

export default SkillProgressBar;
