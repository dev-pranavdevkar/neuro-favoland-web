//Ant Design
import { Layout } from 'antd';

//Components
import About from '@/src/container/About';
import LayoutDashboard from '@/src/container/Layout';

export default function AboutPage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<About />
		</Layout>
	);
}
