import LayoutDashboard from '@/src/container/Layout';
import ProductDes from '@/src/container/ProductDescription';

import { Layout } from 'antd';
import { useRouter } from 'next/router';

export default function ProductDetail() {
	const router = useRouter();
	const productId = router.query.productId;
	return (
		<Layout className="m-0 p-0" style={{ background: '#fff' }}>
			<LayoutDashboard />
			<ProductDes productId={productId} />
		</Layout>
	);
}
