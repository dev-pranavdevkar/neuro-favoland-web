//Ant Design
import { Layout } from 'antd';

//Components
import Team from '@/src/container/Team';
import LayoutDashboard from '@/src/container/Layout';

export default function AboutPage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<Team />
		</Layout>
	);
}
