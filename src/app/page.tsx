'use client';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Skills } from '@/components/Skill';

import { useEffect, useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		// Simulate retro loading screen
		if (width < 100) {
			const timer = setTimeout(() => setWidth(width + 1), 15); // Adjust speed here
			return () => clearTimeout(timer);
		} else {
			setLoading(false);
		}
	}, [width]);

	if (loading) {
		return (
			<div className="min-h-screen bg-[var(--pixel-black)] flex items-center justify-center pixel-grid">
				<div className="text-center">
					<div className="text-[var(--pixel-green)] text-4xl font-pixel mb-8 animate-blink">
						LOADING...
					</div>
					<div className="w-64 h-4 border-2 border-[var(--pixel-green)] bg-[var(--pixel-gray-dark)]">
						<div
							className="h-full bg-[var(--pixel-green)] animate-pulse"
							style={{ width: `${width}%` }}
						></div>
					</div>
					<div className="text-[var(--pixel-green)] text-sm font-pixel mt-4">
						INITIALIZING KUROSHIBA.DEV
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[var(--pixel-black)] text-[var(--pixel-white)] relative scanlines">
			<Header />
			<main>
				<Main />
				<About />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
