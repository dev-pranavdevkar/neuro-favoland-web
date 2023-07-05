//Nextjs components
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
//Ant design
// import { Col, Row, Typography } from 'antd';


//Styles

export default function HeroSection() {
	const homeMain = 'images/Favoland/home/homeMain.png';
	return (
		<>
			{/* Code By Pranav Devkar */}
			<div>
				<div className="row py-40">
					<div className="col-lg-5 ">
						<div className='home-main '>
							<h1 className='home-page-main-title'>Beauty at your fingertips</h1>
							<p className='home-page-para mb-40'>
								Favoland helps you find the beauty products that match your
								personal needs and values. You might be looking for products
								that are safe to use and won&apos;t aggravate a skin condition. You
								might need to find products that are compatible with your
								religious practices, concerns about the use of animals, or the
								impact of the manufacturing process on the environment and the
								people involved in it.
							</p>
							<p>
								Whatever your priorities are, Favoland helps you find your
								favorite products. Our AI-driven technology provides you with
								the information you need:
							</p>
							<p>
							<b>Product Ingredients:</b> What goes into the beauty products you
								might buy? Are the ingredients safe? Do they cause skin
								irritation? Are they vegan? Are they compatible with your
								religion?
							</p>
							<p>
							<b>Sustainability:</b> How are the products manufactured? Is this
								consistent with guidelines for low environmental impact?
							</p>
							<p>
							<b>Traceability:</b> Where do the ingredients come from? Can we be sure
								they come from where they claim to come from?
							</p>
							<p>
							<b>	Ethics:</b> Do the companies behind the products behave in an
								ethical way? Do they respect the rights of their employees and
								animals?
							</p>

							<Link className="navbar-link" href={'/signup'}>
						<button type="button" class="btn btn-primary signUp-btn">
							Sign up
						</button>
					</Link>
						</div>
					</div>
					<div className="col-lg-7">
					<div className="mt-100" >
								<div className="">
									<div className="home-border-box-1"></div>
									<img
										className="homeImg"
										src={homeMain}
										alt="Image Of Section 1"
									/>
									<div className="home-border-box-2"></div>
								</div>
							</div>
					</div>
				</div>
			</div>

			{/* ----------------------------------------------------------------------------------------------- */}
{/* old code */}
			{/* <Row className={styles.heroSection}>
				<Col lg={11} xl={12} md={24}>
					<div>
						<Text className={styles.text}>Beauty at your fingertips</Text>
						<p className={styles.paragraph}>
							Favoland helps you find the beauty products that match your
							personal needs and values. You might be looking for products that
							are safe to use and won&apos;t aggravate a skin condition. You might
							need to find products that are compatible with your religious
							practices, concerns about the use of animals, or the impact of the
							manufacturing process on the environment and the people involved
							in it.
						</p>

						<p className={styles.paragraph}>
							Whatever your priorities are, Favoland helps you find your
							favorite products. Our AI-driven technology provides you with the
							information you need:
							<br />{' '}
						</p>
						<p className={styles.paragraph}>
							<b>Product Ingredients:</b> What goes into the beauty products you
							might buy? Are the ingredients safe? Do they cause skin
							irritation? Are they vegan? Are they compatible with your
							religion?
							<br />{' '}
						</p>
						<p className={styles.paragraph}>
							<b>Sustainability:</b> How are the products manufactured? Is this
							consistent with guidelines for low environmental impact?
							<br />{' '}
						</p>
						<p className={styles.paragraph}>
							<b>Traceability:</b> Where do the ingredients come from? Can we be
							sure they come from where they claim to come from?
							<br />{' '}
						</p>
						<p className={styles.paragraph}>
							<b>Ethics:</b> Do the companies behind the products behave in an
							ethical way? Do they respect the rights of their employees and
							animals?
						</p>
						<Link className={styles.signup} href={'/signup'}>
							Sign up
						</Link>
					</div>
				</Col>
				<Col
					lg={12}
					xl={12}
					md={24}
					sm={24}
					xs={24}
					className={styles.imageSection}
				>
					<Image
						src="/images/heroimg.png"
						alt="Hero Image"
						sizes="100vw"
						fill
					/>
				</Col>
			</Row> */}
		</>
	);
}
