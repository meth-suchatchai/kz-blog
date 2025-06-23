import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

const pressStart2P = Press_Start_2P({
	variable: '--font-pixel',
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'KuroshibaZ',
	description: 'Showcase Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pressStart2P.variable} antialiased`}>{children}</body>
		</html>
	);
}
