'use client';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact = () => {
	const socials = [
		{ name: 'GITHUB', value: 'https://github.com/meth-suchatchai' },
		{
			name: 'LINKEDIN',
			value: 'https://www.linkedin.com/in/suchatchai-methwaranont/',
		},
	];

	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });
	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	console.log('Form submitted:', formData);
	// 	// Handle form submission
	// };

	// const handleChange = (
	// 	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ) => {
	// 	setFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	return (
		<section id="contact" className="py-20 px-4 bg-[var(--pixel-gray-dark)/20]">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-xl md:text-2xl font-pixel text-[var(--pixel-green)] text-center mb-12 text-glow">
					ESTABLISH_CONNECTION
				</h2>

				<div className="grid md:grid-cols gap-12 justify-center">
					{/* Contact Info */}
					<div className="pixel-card">
						<div className="border-b-2 border-[var(--pixel-green)] pb-4 mb-6">
							<h3 className="font-pixel text-[var(--pixel-yellow)] text-lg">
								CONTACT_PROTOCOLS
							</h3>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<Mail className="text-pixel-green" size={20} />
								<div>
									<div className="font-pixel text-sm text-pixel-white">
										EMAIL
									</div>
									<div className="font-pixel text-xs text-pixel-green">
										kuroshibaz@admin.dev
									</div>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<MessageSquare className="text-pixel-cyan" size={20} />
								<div>
									<div className="font-pixel text-sm text-pixel-white">
										DISCORD
									</div>
									<div className="font-pixel text-xs text-pixel-cyan">
										白狼様
										<br />
										黒柴 Kuro ที่ไม่ใช่ shiba
									</div>
								</div>
							</div>

							<div className="mt-8">
								<div className="font-pixel text-sm text-pixel-yellow mb-4">
									SOCIAL_LINKS:
								</div>
								<div className="space-y-2">
									{socials.map((social) => (
										<button
											key={social.name}
											className="block w-full text-left pixel-button border-[var(--pixel-cyan)] text-[var(--pixel-cyan)] hover:bg-[var(--pixel-cyan)] hover:text-[var(--pixel-black)] text-xs"
											onClick={() => {
												window.open(social.value, '_blank');
											}}
										>
											{social.name}.com
										</button>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					{/* <div className="pixel-card">
						<div className="border-b-2 border-pixel-green pb-4 mb-6">
							<h3 className="font-pixel text-pixel-yellow text-lg">
								SEND_MESSAGE.EXE
							</h3>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block font-pixel text-sm text-pixel-white mb-2">
									NAME:
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full bg-pixel-black border-2 border-pixel-green text-pixel-white font-pixel text-sm p-3 focus:border-pixel-yellow focus:outline-none"
									placeholder="ENTER_YOUR_NAME"
									required
								/>
							</div>

							<div>
								<label className="block font-pixel text-sm text-pixel-white mb-2">
									EMAIL:
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full bg-pixel-black border-2 border-pixel-green text-pixel-white font-pixel text-sm p-3 focus:border-pixel-yellow focus:outline-none"
									placeholder="YOUR@EMAIL.COM"
									required
								/>
							</div>

							<div>
								<label className="block font-pixel text-sm text-pixel-white mb-2">
									MESSAGE:
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className="w-full bg-pixel-black border-2 border-pixel-green text-pixel-white font-pixel text-sm p-3 focus:border-pixel-yellow focus:outline-none resize-none"
									placeholder="TYPE_YOUR_MESSAGE_HERE..."
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full flex items-center justify-center gap-2 pixel-button hover:animate-pixel-pulse"
							>
								<Send size={16} />
								TRANSMIT_MESSAGE
							</button>
						</form>
					</div> */}
				</div>

				{/* Status Display */}
				<div className="mt-12 text-center">
					<div className="pixel-card max-w-md mx-auto">
						<div className="font-pixel text-sm text-pixel-white">
							STATUS:{' '}
							<span className="text-[var(--pixel-green)] animate-blink">
								ONLINE
							</span>
							<br />
							RESPONSE_TIME:{' '}
							<span className="text-[var(--pixel-yellow)]">~24 HOURS</span>
							<br />
							AVAILABILITY:{' '}
							<span className="text-[var(--pixel-cyan)]">
								READY_FOR_PROJECTS
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
