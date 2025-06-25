export const Skills = () => {
	const skills = [
		{ name: 'GOLANG', level: 95, color: 'bg-[var(--pixel-cyan)]' },
		{ name: 'REACT', level: 90, color: 'bg-[var(--pixel-blue)]' },
		{ name: 'RDBMS/MONGODB', level: 85, color: 'bg-[var(--pixel-green)]' },
		{ name: 'TYPESCRIPT', level: 80, color: 'bg-[var(--pixel-yellow)]' },
		{ name: 'CI/CD', level: 75, color: 'bg-[var(--pixel-magenta)]' },
		{ name: 'DIGITALOCEAN/AWS', level: 70, color: 'bg-[var(--pixel-red)]' },
	];

	const tools = [
		'JETBRAINS',
		'VSCODE',
		'KUBENETES',
		'DOCKER',
		'JENKINS',
		'TEAMCITY',
		'FIGMA',
		'SKETCH',
		'POSTMAN',
		'INSOMNIA',
		'LINUX',
		'ATLASSIAN',
	];

	return (
		<section id="skills" className="py-20 px-4 bg-[var(--pixel-gray-dark)/20]">
			<div className="container mx-auto max-aw-4xl">
				<div className="grid grid-cols-1">
					<h2 className="text-3xl md:text-4xl font-pixel text-[var(--pixel-green)] text-center mb-12 text-glow">
						SKILL_TREE
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Programming Skills */}
					<div className="pixel-card">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-md md:text-lg">
								PROGRAMMING_LANGUAGES
							</h3>
						</div>

						<div className="space-y-6">
							{skills.map((skill) => (
								<div key={skill.name}>
									<div className="flex justify-between items-center mb-2">
										<span className="font-pixel text-sm text-[var(--pixel-white)]">
											{skill.name}
										</span>
										<span className="font-pixel text-xs text-[var(--pixel-green)]">
											{skill.level}%
										</span>
									</div>
									<div className="w-full h-4 bg-pixel-black border border-pixel-green">
										<div
											className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Tools & Technologies */}
					<div className="pixel-card">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-lg">
								TOOLS_&_TECH
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{tools.map((tool, index) => (
								<div
									key={tool}
									className="pixel-button text-center border-[var(--pixel-cyan)] text-[var(--pixel-cyan)] hover:bg-[var(--pixel-cyan)] hover:text-[var(--pixel-black)] transition-all duration-200"
									style={{
										animationDelay: `${index * 0.1}s`,
										animation: 'pixel-pulse 2s infinite',
									}}
								>
									{tool}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Current Focus */}
				<div className="mt-16 text-center">
					<div className="pixel-card max-w-2xl mx-auto">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-lg">
								CURRENT_QUEST
							</h3>
						</div>
						<p className="font-pixel text-sm text-[var(--pixel-white)] leading-relaxed">
							{'>'}CURRENTLY EXPLORING: WEB3, AND SCALING A LARGE SERVICE
							<br />
							{'>'}NEXT TARGET: AI INTEGRATION, AUTOMATION WORKFLOW (NOBODY CAN
							ALWAYS WORK)
							<br />
							<span className="text-[var(--pixel-green)]">
								{'>'}ALWAYS LEARNING, ALWAYS GROWING!
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
