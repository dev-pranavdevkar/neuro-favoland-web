//Ant cesign
import { Row } from 'antd';

//Components
import Footer from '@/src/components/common/layout/Footer';
import Navbar from '../Navbar';

//CSS
import styles from './style.module.css';

function DataDeletion() {
	return (
		<div className={styles.container}>
			<Navbar />
            <Row className={styles.row}>
				<h1 style={{marginTop: 10}}>Data Deletion Policy</h1>
				<h2 style={{marginTop: 10}}>Request deletion of my data</h2>
				<p style={{marginTop: 10}}>
					You can delete your account and all of your data from our website by
					sending us an email at mail@favoland.com
				</p>
				<h2 style={{marginTop: 10}}>Contact Us</h2>
				<p style={{marginTop: 10}}>
					If you have any questions about this data deletion, You can contact
					us: By email: mail@favoland.com
				</p>
			</Row>
			<Footer />
		</div>
	);
}

export default DataDeletion;
