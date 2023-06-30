import { Layout } from 'antd';

//Containers
import Signup from '@/src/container/SignUp';

function SignUpPage() {
	
	return (
		<>
			<Layout className="m-0 p-0 bg-none" style={{ background: '#fff' }}>
				<Signup />
			</Layout>
		</>
	);
}

export default SignUpPage;
