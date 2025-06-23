import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: 'HOME', href: '#home' },
		{ name: 'ABOUT', href: '#about' },
		{ name: 'SKILLS', href: '#skills' },
		// { name: 'PROJECTS', href: '#projects' },
		{ name: 'CONTACT', href: '#contact' },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[var(--pixel-black)/95] border-b-2 border-pixel-green backdrop-blur-sm">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="text-[var(--pixel-green)] font-pixel text-lg hover:text-glow transition-all cursor-pointer">
						KUROSHIBA.DEV
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-[var(--pixel-white)] font-pixel text-sm hover:text-[var(--pixel-green)] transition-colors duration-200 hover:text-glow"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-[var(--pixel-green)] hover:text-[var(--pixel-yellow)] transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden mt-4 pt-4 border-t border-[var(--pixel-green)]">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-[var(--pixel-white)] font-pixel text-sm hover:text-[var(--pixel-green)] transition-colors duration-200 hover:text-glow"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};
