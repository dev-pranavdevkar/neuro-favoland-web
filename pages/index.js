import Head from 'next/head';
import HomePage from './home';
export default function Home() {
	return (
		<>
			<Head>
				<title>Favoland</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/fevicon32X32.png"
				/>
				<link rel="icon" type="image/png" sizes="16x16" href="/fevicon16.png" />{' '}
			</Head>
			<HomePage />
		</>
	);
}
