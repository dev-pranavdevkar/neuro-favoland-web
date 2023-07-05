import styles from './styles.module.css';

//Ant cesign
import { Col, Row, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

//Nextjs components
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//NextAuth

//Components
import ButtonOutline from '@/src/components/Button/ButtonOutline';
import { signIn, useSession } from 'next-auth/react';

function Signup() {
	const { data: session } = useSession();
	const router = useRouter();

	if (session) {
		router.push('/');
	}
	const facebookIcon = (
		<Image
			src="/images/icons/facebook.png"
			width={15}
			height={15}
			alt="facebook icon"
		/>
	);
	const googleIcon = (
		<Image
			src="/images/icons/google.png"
			width={20}
			height={20}
			alt="google icon"
		/>
	);
	return (
		<Row className={styles.row}>
			<Col md={12} className={styles.imageSection}>
				<Image src="/img.png" alt="Hero Section" fill />
			</Col>
			<Col md={12} sm={24} className={styles.col}>
				<div className={styles.logo}>
					<Link href="/">
						<Image
							src="/images/logo.svg"
							alt="favoland logo"
							width={150}
							height={100}
						/>
					</Link>
				</div>
				<div>
					<Title>Signing up is now made easy.</Title>
					<Paragraph>Discover your beauty products today!</Paragraph>
					<Col className={styles.loginBtns}>
						<ButtonOutline
							title="Sign in with Google"
							link={'#'}
							icon={googleIcon}
							onclick={signIn}
						/>
						<ButtonOutline
							title="Sign in with Facebook"
							link={'#'}
							icon={facebookIcon}
						/>
					</Col>
					<p>
						By continuing, you agree to Favoland&apos;s{' '}
						<Link href="/term">terms and condition</Link>
					</p>
					<p>
						and acknowledge that you&apos;ve read our{' '}
						<Link href="/privacy-policy">Privacy Policy</Link>{' '}
					</p>
					<Col className={styles.loginBtns}>
						<ButtonOutline title="Proceed with Login" />
					</Col>
				</div>
				``
				<Text>©2023 Favoland</Text>
			</Col>
		</Row>
	);
}

export default Signup;
