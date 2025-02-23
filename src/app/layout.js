import Navbar from './navbar';
import './globals.css';

export const metadata = {
	title: 'Vvveb',
	description: 'Vvveb Headless REST API Next.js',
};

//export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
