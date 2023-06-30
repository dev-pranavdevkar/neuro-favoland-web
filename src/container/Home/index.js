//Container
import Footer from '@/src/components/common/layout/Footer';
import Categories from './Categories';
import HeroSection from './HeroSection';
import Ingredients from './Ingredients';
import Products from './Products';
import TopDeals from './TopDeals';
//Styles
import styles from './styles.module.css';
//Next Auth
import { getSession } from 'next-auth/react';

export default function Home() {
	return (
		<div className={styles.container}>
			<HeroSection />
			<Products />
			<hr />
			<Categories />
			<hr />
			<Ingredients />
			<hr />
			<TopDeals />
			<hr />
			{/* <Brands /> */}
			<hr />
			<Footer />
		</div>
	);
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: '/signup',
			},
		};
	}
	return {
		props: { session },
	};
};
