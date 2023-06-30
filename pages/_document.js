import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script src="https://unpkg.com/scandit-sdk@2.1.1"></script>
				<script src="https://cdn.jsdelivr.net/npm/scandit-sdk@2.1.1"></script>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/fevicon32X32.png"
				/>
				<link rel="icon" type="image/png" sizes="16x16" href="/fevicon16.png" />{' '}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
