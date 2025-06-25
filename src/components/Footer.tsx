export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 px-4 border-t-2 border-[var(--pixel-green)]">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center">
					{/* Logo */}
					<div className="text-[var(--pixel-green)] font-pixel text-xl mb-4 text-glow">
						KUROSHIBA.DEV
					</div>

					{/* Copyright */}
					<div className="font-pixel text-sm text-pixel-white mb-6">
						© {currentYear} KUROSHIBA. ALL_RIGHTS_RESERVED.
					</div>

					{/* Credits */}
					<div className="font-pixel text-xs text-pixel-gray-light space-y-2">
						<div>BUILT_WITH: REACT + TAILWIND+ RADIXUI</div>
						<div>BACKEND: GOLANG</div>
						<div>INSPIRED_BY: RETRO_GAMING_AESTHETICS</div>
						<div className="text-pixel-green">POWERED_BY: LOVEABLE</div>
					</div>

					{/* Easter Egg */}
					<div className="mt-8 font-pixel text-xs text-pixel-yellow animate-blink">
						↑↑↓↓←→←→BA_START
					</div>
				</div>
			</div>
		</footer>
	);
};
