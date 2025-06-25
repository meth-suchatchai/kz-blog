'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Main = () => {
	const [text, setText] = useState('');
	const [showCursor, setShowCursor] = useState(true);
	const fullText = "HELLO, I'M KUROSHIBA";

	useEffect(() => {
		let index = 0;
		const typeInterval = setInterval(() => {
			if (index < fullText.length) {
				setText(fullText.slice(0, index + 1));
				index++;
			} else {
				clearInterval(typeInterval);
			}
		}, 100);
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);
		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
		};
	}, []);

	const openCV = () => {
		window.open(
			'https://www.linkedin.com/in/suchatchai-methwaranont/',
			'_blank'
		);
	};

	const openGithub = () => {
		window.open('https://github.com/meth-suchatchai', '_blank');
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative pixel-grid"
		>
			<div className="text-center z-10">
				{/* Pixel Art Avatar Placeholder */}
				<div className="flex my-5">
					<div className="w-32 h-32 mx-auto mb-8 bg-[var(--pixel-gray-dark)] border-4 border-[var(--pixel-green)] relative">
						<div className="absolute inset-4 bg-[var(--pixel-black)]"></div>
						<div className="absolute top-6 left-6 w-4 h-4 bg-[var(--pixel-green)]"></div>
						<div className="absolute top-6 right-6 w-4 h-4 bg-[var(--pixel-green)]"></div>
						<div className="absolute bottom-8 left-8 w-16 h-2 bg-[var(--pixel-green)] rounded-full"></div>
						<div className="text-[var(--pixel-green)] text-xs font-pixel absolute -bottom-8 left-1/2 transform -translate-x-1/2">
							KUROSHIBA
						</div>
					</div>
				</div>

				{/* <div className="w-32 h-32 mx-auto mb-8 bg-[var(--pixel-gray-dark)] border-4 border-[var(--pixel-green)] relative">
					<div className="absolute left-8 top-8 w-16 h-12 bg-[var(--pixel-orange)] rounded-md"></div>

					<div className="absolute left-6 top-4 w-6 h-6 bg-[var(--pixel-orange)] rotate-[-20deg] rounded-t-md"></div>

					<div className="absolute right-6 top-4 w-6 h-6 bg-[var(--pixel-orange)] rotate-[20deg] rounded-t-md"></div>

					<div className="absolute left-12 top-14 w-2 h-2 bg-[var(--pixel-black)] rounded"></div>

					<div className="absolute right-12 top-14 w-2 h-2 bg-[var(--pixel-black)] rounded"></div>

					<div className="absolute left-1/2 top-20 w-2 h-2 bg-[var(--pixel-black)] rounded -translate-x-1/2"></div>

					<div className="absolute left-1/2 top-22 w-4 h-1 bg-[var(--pixel-black)] rounded -translate-x-1/2"></div>

					<div className="absolute left-10 top-20 w-2 h-2 bg-[var(--pixel-white)] rounded"></div>
					<div className="absolute right-10 top-20 w-2 h-2 bg-[var(--pixel-white)] rounded"></div>

					<div className="absolute left-10 bottom-8 w-12 h-2 bg-[var(--pixel-green)] rounded"></div>

					<div className="text-pixel-green text-xs font-pixel absolute -bottom-8 left-1/2 transform -translate-x-1/2">
						KUROSHIBA
					</div>
				</div> */}

				{/* Animated Title */}
				<h1 className="text-3xl md:text-4xl font-pixel text-[var(--pixel-green)] mb-5 mt-5 text-glow">
					{text}
					<span
						className={`${
							showCursor ? 'opacity-100' : 'opacity-0'
						} transition-opacity`}
					>
						_
					</span>
				</h1>

				{/* Subtitle */}
				<p className="text-xl md:text-2xl font-pixel text-pixel-white mb-8 px-2">
					FULLSTACK DEVELOPER
				</p>

				{/* 8-bit style buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
					<button
						className="pixel-button animate-pixel-pulse"
						onClick={openGithub}
					>
						VIEW PROJECTS
					</button>
					<button
						className="pixel-button border-[var(--pixel-yellow)] text-[var(--pixel-yellow)] hover:bg-[var(--pixel-yellow)] hover:text-[var(--pixel-black)] cursor-pointer"
						onClick={openCV}
					>
						VIEW CV
					</button>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
					<div className="text-center">
						<div className="text-2xl font-pixel text-[var(--pixel-green)]">
							05+
						</div>
						<div className="text-sm font-pixel text-pixel-white">YEARS</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-pixel text-[var(--pixel-yellow)]">
							50+
						</div>
						<div className="text-sm font-pixel text-pixel-white">PROJECTS</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-pixel text-[var(--pixel-cyan)]">
							99%
						</div>
						<div className="text-sm font-pixel text-pixel-white">SUCCESS</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<a href="#about">
					<ChevronDown className="text-pixel-green" size={32} />
				</a>
			</div>
		</section>
	);
};
