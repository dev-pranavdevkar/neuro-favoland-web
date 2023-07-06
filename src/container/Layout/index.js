//Ant design
import { Layout } from 'antd';

//CSS
import styles from './styles.module.css';

//Containers
import { signOut, useSession } from 'next-auth/react';
import Navbar from '../Navbar';
import Topbar from '../Navbar/components/Topbar';

function LayoutDashboard() {
	const { data: session, status } = useSession();

	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<div className={styles.topbar}>
				<h2>
					<a
						href="https://share.hsforms.com/1a5k6i_zETqeyWx1eAVv_8Ad82qy"
						target="_blank"
						rel="noreferrer"
					>
						We are in Beta. We are launching this summer. Please register to be
						notified when we launch
					</a>
				</h2>
			</div>
			<div className={styles.container}>
				<Topbar />
				<Navbar status={status} session={session} signOut={signOut} />
			</div>
		</Layout>
	);
}

export default LayoutDashboard;
