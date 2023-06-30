import Footer from '@/src/components/common/layout/Footer';
import LayoutDashboard from '@/src/container/Layout';
import { Layout } from 'antd';
export default function CompanyPage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<div
				style={{
					minHeight: '60vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>Coming Soon</h1>
			</div>
			<Footer />
		</Layout>
	);
}
