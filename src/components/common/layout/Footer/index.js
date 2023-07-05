// Ant Design
import {
	FacebookFilled,
	InstagramOutlined,
	TwitterSquareFilled,
	LinkedinFilled

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
					<FacebookFilled className={styles.icon} />

					<InstagramOutlined className={styles.icon} />

					<TwitterSquareFilled className={styles.icon} />

					<LinkedinFilled className={styles.icon} />
				</ul>
			</Row>
			<Row className={styles.copyright}>©2021 Favoland</Row>
		</>
	);
}
