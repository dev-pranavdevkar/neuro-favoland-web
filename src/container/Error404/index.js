import styles from './styles.module.css';

//Ant cesign
import { Button, Col, Row, Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

//Nextjs components
import Image from 'next/image';

function Error404() {
	return (
		<>
			<Row className={styles.row}>
				<Col span={12} className={styles.col}>
					<div className="logo">Favoland</div>
					<div>
						<div className="coming-soon">Coming Soon</div>
						<Title>Beauty at your fingertips</Title>
						<Paragraph>
							Favoland provides real-time information (compare prices, find
							similar products, track sales history), insights (discontinued
							styles, replacement products, recalls, warranties), and
							intelligence (transparency, authenticity) about your favorite
							brands, products, features, ingredients, textures, and more.
							<br></br>Register to be notified when the site launches{' '}
						</Paragraph>
						<Button type="primary">Notify</Button>
					</div>
					<Text>©2023 Favoland</Text>
				</Col>
				<Col span={12} className={styles.imageSection}>
					<Image src="/img.png" alt="Hero Section" width={500} height={500} />
				</Col>
			</Row>
		</>
	);
}

export default Error404;
