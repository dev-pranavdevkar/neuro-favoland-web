//Nextjs components
import Image from 'next/image';
import Link from 'next/link';

//Ant design
import { Col, Row, Typography } from 'antd';
const { Paragraph, Text } = Typography;

//Styles
import styles from './styles.module.css';

export default function HeroSection() {
	return (
		<>
			<Row className={styles.heroSection}>
				<Col lg={11} xl={12} md={24}>
					<div>
						<Text className={styles.text}>Beauty at your fingertips</Text>
						<Paragraph className={styles.paragraph}>
							Favoland provides real-time information (compare prices, find
							similar products, track sales history), insights (discontinued
							styles, replacement products, recalls, warranties), and
							intelligence (transparency, authenticity) about your favorite
							brands, products, features, ingredients, textures, and more.
						</Paragraph>
						<Link className={styles.signup} href={'/signup'}>
							Sign up
						</Link>
					</div>
				</Col>
				<Col
					lg={12}
					xl={12}
					md={24}
					sm={24}
					xs={24}
					className={styles.imageSection}
				>
					<Image
						src="/images/heroimg.png"
						alt="Hero Image"
						sizes="100vw"
						fill
					/>
				</Col>
			</Row>
		</>
	);
}
