'use client';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Skills } from '@/components/Skill';
// import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate retro loading screen
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="min-h-screen bg-pixel-black flex items-center justify-center pixel-grid">
				<div className="text-center">
					<div className="text-pixel-green text-4xl font-pixel mb-8 animate-blink">
						LOADING...
					</div>
					<div className="w-64 h-4 border-2 border-pixel-green bg-pixel-gray-dark">
						<div
							className="h-full bg-pixel-green animate-pulse"
							style={{ width: '100%' }}
						></div>
					</div>
					<div className="text-pixel-green text-sm font-pixel mt-4">
						INITIALIZING KUROSHIBA.DEV
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-pixel-black text-pixel-white relative scanlines">
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
