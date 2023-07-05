//Styles
import styles from './styles.module.css';

//Ant cesign
import { Col, Row, Typography } from 'antd';
const { Title, Paragraph } = Typography;

//Nextjs Components
import Link from 'next/link';

//Components
import ButtonFilled from '@/src/components/Button/ButtonFilled';
import Footer from '@/src/components/common/layout/Footer';

import { signOut, useSession } from 'next-auth/react';

function Profile() {
	const { data: session, status } = useSession();

	return (
		<div className={styles.container}>
			<Row className={styles.row}>
				<h1 className={styles.h1}>Profile</h1>
				<Row className={styles.profileImageContainer}>
					<Col className={styles.profileImage}>
						{status === 'authenticated' && (
							<img
								src={session?.user?.image}
								alt="profile image"
								className={styles.image}
								fill
							/>
						)}
					</Col>
					<Col>
						<Link href={'#'} className={styles.link}>
							Change profile photo
						</Link>
					</Col>
				</Row>
				<Col>
					<Title level={4}></Title>
					<Title level={4}>{session?.user?.name}</Title>
					<Paragraph>{session?.user?.email}</Paragraph>
					<ButtonFilled title="Logout" link="/" onclick={signOut} />
				</Col>
			</Row>
			{/* <TextField title="First Name" placeholder="First Name" type="text" />
			<TextField title="Last Name" placeholder="Last Name" type="text" />
			<Col className={styles.subscription}>
				<label>Subscription</label>
				<ButtonOutline title="Annual Plan" />
			</Col>
			<Row className={styles.textContainer}>
				<TextField title="Email" placeholder="Your Email" type="email" />
				<Link href={'#'} className={styles.changeEmailLink}>
					Change Email
				</Link>
			</Row>
			<Row className={styles.textContainer}>
				<TextField title="Password" placeholder="Password" type="password" />
				<Link href={'#'} className={styles.changeEmailLink}>
					Change Password
				</Link>
			</Row>

			<ButtonFilled title="Save" /> */}
			<Footer />
		</div>
	);
}

export default Profile;
