//Ant design
import { Layout } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
//Containers
import Home from '@/src/container/Home';
import LayoutDashboard from '@/src/container/Layout';

function HomePage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<Home />
		</Layout>
	);
}

export default HomePage;
