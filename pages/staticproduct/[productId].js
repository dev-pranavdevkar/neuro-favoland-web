import LayoutDashboard from '@/src/container/Layout';
import StaticProductDes from '@/src/container/ProductDescription/StaticDes';

import { Layout } from 'antd';
import { useRouter } from 'next/router';

export default function StaticProductDetail() {
	const router = useRouter();
	const productId = router.query.productId;
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<StaticProductDes productId={productId} />
		</Layout>
	);
}
