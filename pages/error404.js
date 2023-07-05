import { Layout } from 'antd';

//Containers
import Error404 from '@/src/container/Error404';

import LayoutDashboard from '@/src/container/Layout';

function Error404Page() {
	return (
		<>
			<Layout className="m-0 p-0 bg-none">
				<LayoutDashboard />
				<Error404 />
			</Layout>
		</>
	);
}

export default Error404Page;
