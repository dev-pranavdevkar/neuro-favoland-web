//Ant Design
import { Layout } from 'antd';

// CSS

//Components
import LayoutDashboard from '@/src/container/Layout';
import Profile from '@/src/container/Profile';
export default function ProfilePage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<Profile />
		</Layout>
	);
}
