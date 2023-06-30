//Ant Design
import { Col, Row } from 'antd';

//Nextjs components
import Image from 'next/image';

//Styles
import styles from './styles.module.css';

//Data
const CredentialsItems = [
	{ id: 1, img: '/images/icons/crediential.png', title: 'Made In USA' },
	{
		id: 1,
		img: '/images/icons/crediential.png',
		title: 'No chinese raw materials',
	},
	{
		id: 1,
		img: '/images/icons/crediential.png',
		title: 'No Arsenic lead or mercury',
	},
	{ id: 1, img: '/images/icons/crediential.png', title: 'FDA approved' },
	{ id: 1, img: '/images/icons/crediential.png', title: 'No child labor' },
];

export default function Credentials() {
	return (
		<Row className={styles.credentials}>
			<h2>Credentials</h2>
			<Row>
				{CredentialsItems.map((item) => {
					return (
						<>
							<Col className={styles.credentialsItem} key={item.id}>
								<Image src={item.img} width={40} height={40} alt={item.title} />
								<p>{item.title}</p>
							</Col>
						</>
					);
				})}
			</Row>
		</Row>
	);
}
