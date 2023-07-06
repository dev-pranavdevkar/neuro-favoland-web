//Ant Design
import { Layout } from 'antd';

//Components
import About from '@/src/container/About';
import LayoutDashboard from '@/src/container/Layout';
import Footer from '@/src/components/common/layout/Footer';

export default function AboutPage() {
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<div className='container px-5'>
				<About />
				<div className='mtn-400' >
					<Footer />
				</div>
</div>
			

		</Layout>
	);
}
