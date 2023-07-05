//Nextjs
import Link from 'next/link';
import { useState } from 'react';
//AntDesign
import { CaretDownOutlined } from '@ant-design/icons';
import { Row } from 'antd';
//Styles
import { useRouter } from 'next/router';
import styles from './styles.module.css';
//Data
const menu = [
	{ id: 1, label: 'Hair', name: 'hair' },
	{ id: 2, label: 'Face', name: 'face' },
	{ id: 3, label: 'Lips', name: 'lips' },
	{ id: 4, label: 'Nails', name: 'nails' },
	{ id: 5, label: 'Skin', name: 'skin' },
	{ id: 6, label: 'Body', name: 'body' },
	{ id: 7, label: 'Brands', name: 'brands' },
];

export default function Cagetgory() {
	const [open, setOpen] = useState(false);

	const handleDropdown = () => {
		setOpen(!open);
	};
	const handleMouseEnter = () => {
		setOpen(false);
	};

	const router = useRouter();

	const { query } = router;

	return (
		<Row className={styles.row}>
			<button
				className={styles.dropdown } 
				onClick={handleDropdown}
				onMouseEnter={handleMouseEnter}
			>
		
				{query.categoryName ? query.categoryName : 'All cagtegories'}
				<CaretDownOutlined />
			</button>
			{open ? (
				<ul className={styles.menu} onMouseLeave={handleDropdown}>
					{menu.map((item) => {
						return (
							<Link key={item.id} href={`/category/${item.name}`}>
								<li className={styles.menuItem} key={item.id}>
									{item.label}
								</li>
							</Link>
						);
					})}
				</ul>
			) : null}
		</Row>
	);
}
