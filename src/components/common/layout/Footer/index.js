//Ant Design
import {
	FacebookFilled,
	InstagramOutlined,
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
						<li>Settings</li>
					</Link>

					<li>Education</li>
				</ul>
				<ul>
					<Link href="/about">
						<li>About us</li>
					</Link>
					<Link href="/contact">
						<li>Contact us</li>
					</Link>
					<Link href="/company">
						<li>Company</li>
					</Link>
				</ul>
				<ul>
					<Link href="/terms">
						<li>Terms and condition</li>
					</Link>
					<Link href="/privacy-policy">
						<li>Privacy policy</li>
					</Link>
					<Link href="/data-delete">
						<li>Data deletion Policy</li>
					</Link>
				</ul>
				<ul className={styles.socialIcons}>
					<FacebookFilled className={styles.icon} />

					<InstagramOutlined className={styles.icon} />

					<TwitterSquareFilled className={styles.icon} />
				</ul>
			</Row>
			<Row className={styles.copyright}>©2021 Favoland</Row>
		</>
	);
}
