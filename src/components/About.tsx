export const About = () => {
	return (
		<section id="about" className="py-20 px-4">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl md:text-4xl font-pixel text-[var(--pixel-green)] text-center mb-12 text-glow">
					ABOUT KUROSHIBA
				</h2>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Character Info */}
					<div className="pixel-card">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-lg mb-2">
								CHARACTER_INFO.TXT
							</h3>
						</div>

						<div className="space-y-4 font-pixel text-sm">
							<div className="flex justify-between">
								<span className="text-[var(--pixel-white)]">NAME:</span>
								<span className="text-[var(--pixel-green)]">KUROSHIBA</span>
							</div>
							<div className="flex justify-between">
								<span className="text-[var(--pixel-white)]">CLASS:</span>
								<span className="text-[var(--pixel-cyan)]">FULL_STACK_DEV</span>
							</div>
							<div className="flex justify-between">
								<span className="text-[var(--pixel-white)]">LEVEL:</span>
								<span className="text-[var(--pixel-yellow)]">
									MIDDLE-SENIOR
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-[var(--pixel-white)]">EXP:</span>
								<span className="text-[var(--pixel-magenta)]">5+ YEARS</span>
							</div>
							<div className="flex justify-between">
								<span className="text-[var(--pixel-white)]">STATUS:</span>
								<span className="text-[var(--pixel-green)] animate-blink">
									AVAILABLE
								</span>
							</div>
						</div>
					</div>

					{/* Bio */}
					<div className="pixel-card">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-lg mb-2">
								BIOGRAPHY.LOG
							</h3>
						</div>

						<div className="font-pixel text-sm text-[var(--pixel-white)] leading-relaxed space-y-4">
							<p>
								{'>'}PASSIONATE DEVELOPER WITH 5+ YEARS OF EXPERIENCE IN
								MICROSERVICE DESIGNING AND SCALLING.
							</p>
							<p>
								{'>'}SPECIALIZING IN GOLANG, REACT AND MODERN WEB TECHNOLOGIES.
								LOVE CREATING CLEAN, EFFICIENT CODE THAT SOLVES REAL WORLD
								PROBLEMS.
							</p>
							<p>
								{'>'}WHEN NOT CODING, I ENJOY MAKE A COFFEE AND GAMING,
								CONTRIBUTING TO OPEN SOURCE PROJECTS.
							</p>
							<p className="text-[var(--pixel-green)]">
								{'>'}READY FOR NEXT ADVENTURE!
							</p>
						</div>
					</div>
				</div>

				{/* Achievement Badges */}
				<div className="mt-16">
					<h3 className="font-pixel text-[var(--pixel-yellow)] text-xl text-center mb-8">
						ACHIEVEMENTS_UNLOCKED
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{
								name: 'GOLANG_MASTER',
								color: 'text-pixel-cyan',
							},
							{ name: 'REACT_WIZARD', color: 'text-pixel-green' },
							{ name: 'DDD_ARTITECHTURE', color: 'text-pixel-yellow' },
							{ name: 'INFRASTRUCTURE_DESIGN', color: 'text-pixel-magenta' },
						].map((achievement) => (
							<div key={achievement.name} className="text-center">
								<div className="w-16 h-16 mx-auto mb-2 bg-[var(--pixel-gray-dark)] border-2 border-[var(--pixel-green)] flex items-center justify-center">
									<div className="w-8 h-8 bg-[var(--pixel-green)]"></div>
									{/* {achievement.render} */}
								</div>
								<div className={`font-pixel text-xs ${achievement.color}`}>
									{achievement.name}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
