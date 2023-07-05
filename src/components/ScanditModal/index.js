import { Modal } from 'antd';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ButtonFilled from '../Button/ButtonFilled';
import styles from './styles.module.css';
const Scanner = dynamic(() => import('../ScanditModal/scanditConfig'), {
	ssr: false,
	loading: () => <p>Initializing Scanner</p>,
});

export default function ScanditModal() {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<button type="button" class="btn btn-primary signUp-btn" onclick={showModal}>Scan Product</button>
			{/* <ButtonFilled title="Scan Product" onclick={showModal} /> */}
			<Modal open={open} footer={null}>
				<Scanner />
				<div className={styles.modalFooter}>
					<ButtonFilled
						title="Cancel"
						onclick={handleCancel}
						style={{ marginRight: 10 }}
					/>
					<ButtonFilled title="OK" onclick={handleOk} />
				</div>
			</Modal>
		</>
	);
}
