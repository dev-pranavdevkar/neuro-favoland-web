import CategoryComp from '@/src/container/Category';
import LayoutDashboard from '@/src/container/Layout';

import { Layout } from 'antd';
import { useRouter } from 'next/router';

export default function CategoryName() {
	const router = useRouter();
	const categoryName = router.query.categoryName;

	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			{categoryName !== undefined && (
				<CategoryComp categoryName={categoryName} />
			)}
		</Layout>
	);
}
