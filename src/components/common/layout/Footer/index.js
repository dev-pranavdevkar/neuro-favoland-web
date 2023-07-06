// Ant Design
import {
	FacebookFilled,
	InstagramOutlined,
	LinkedinFilled,
	TwitterSquareFilled,
} from '@ant-design/icons';

import { Row } from 'antd';

//Nextjs
import Link from 'next/link';

//Styles
import styles from './styles.module.css';

export default function Footer() {
	return (
		<>
			<Row className={styles.footer}>
				{/* <ul>
					<li>Recommended</li>
					<li>Deals</li>
				</ul>
				<ul>
					<li>Favorites</li>
					<li>Wishlist</li>
				</ul> */}

				<ul>
					{/* <li>Notifications</li> */}
					<Link href="/profile">
						<li>Recommended</li>
					</Link>

					<li>Deals</li>
				</ul>
				<ul>
					<Link href="/about">
						<li>Favorites</li>
					</Link>
					<Link href="/contact">
						<li>Wishlist</li>
					</Link>
				</ul>
				<ul>
					<Link href="/terms">
						<li>Notifications</li>
					</Link>
					<Link href="/privacy-policy">
						<li>Settings</li>
					</Link>
					<Link href="/data-delete">
						<li>Education</li>
					</Link>
				</ul>
				<ul>
					<Link href="/about">
						<li>About us</li>
					</Link>
					<Link href="/privacy-policy">
						<li>Contact us</li>
					</Link>
					<Link href="/data-delete">
						<li>Company</li>
					</Link>
				</ul>
				<ul>
					<Link href="/terms">
						<li>Terms of service</li>
					</Link>
					<Link href="/privacy-policy">
						<li>Privacy policy</li>
					</Link>
					<Link href="/data-delete">
						<li>Legal</li>
					</Link>
				</ul>
				<ul className={styles.socialIcons}>
					<a href="https://www.facebook.com/Favolandbeauty">
						<FacebookFilled className={styles.icon} />
					</a>
					<a href="https://www.instagram.com/favo.land/">
						<InstagramOutlined className={styles.icon} />
					</a>
					<a href="https://twitter.com/Favoland">
						<TwitterSquareFilled className={styles.icon} />
					</a>
					<a href="https://www.linkedin.com/company/favoland/">
						<LinkedinFilled className={styles.icon} />
					</a>
				</ul>
			</Row>
			<Row className={styles.copyright}>©2021 Favoland</Row>
		</>
	);
}
