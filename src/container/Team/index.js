import 'bootstrap/dist/css/bootstrap.min.css';
import style from './styles.module.css';

export default function index() {
	
	const linkedinLogo = 'images/team/linkedin.svg';

	const TeamMembers = [
		{
			img: 'images/team/jeff.png',
			name: 'Jeff Clark ',
			role: 'CEO',
			linkedinLink: 'https://www.linkedin.com/in/jeffreyrclark/',
		},
		{
			img: 'images/team/Ioana.png',
			name: 'Ioana ',
			role: 'Sales Lead',
			linkedinLink: 'https://www.linkedin.com/in/ioanabirleanu/ ',
		},
		{
			img: 'images/team/Grisilda.png',
			name: 'Grisilda Hoxha',
			role: 'Social Media Manager',
			linkedinLink: 'https://www.linkedin.com/in/grisildahoxha/',
		},
		{
			img: '../images/team/Ken.png',
			name: 'Ken',
			role: 'Sustainability Advisor',
			linkedinLink: 'https://www.linkedin.com/in/circulareconomy/',
		},
		{
			img: 'images/team/Tim.png',
			name: 'Tim Smith',
			role: 'Accountant Advisor',
			linkedinLink: 'https://www.linkedin.com/in/timsmith20/',
		},
		{
			img: '../images/team/Marius.png',
			name: 'Marius Adomnica',
			role: 'Legal Advisor',
			linkedinLink: 'https://www.linkedin.com/in/mariusadomnica/ ',
		},
		{
			img: '../images/team/Michael.png',
			name: 'Michael Silver',
			role: 'Business',
			linkedinLink: 'https://www.linkedin.com/in/michael-silver-b29b774/ ',
		},
		{
			img: 'images/team/jeffFelten.png',
			name: 'Jeff Felten',
			role: 'Startup',
			linkedinLink: 'https://www.linkedin.com/in/jeff-felten/',
		},
		{
			img: '../images/team/vdevdas.png',
			name: 'Vic Devdas',
			role: 'Technology',
			linkedinLink: 'https://www.linkedin.com/in/vdevdas/',
		},
		{
			img: '../images/team/profile.png',
			name: 'Steven Schnittger',
			role: 'Science, Estee Lauder',
			linkedinLink: 'https://www.linkedin.com/in/steven-schnittger-042520/',
		},
		{
			img: 'images/team/Nicky.png',
			name: 'Nicky Shapiro',
			role: 'Beauty Sales, L Oreal',
			linkedinLink: 'https://www.linkedin.com/in/nicky-shapiro/',
		},
		{
			img: 'images/team/Rajat.jpg',
			name: 'Rajat',
			role: 'Developer',
			linkedinLink: 'https://www.linkedin.com/',
		},
		{
			img: 'images/team/Vedant.jpg',
			name: 'Vedant',
			role: 'Developer',
			linkedinLink: 'https://www.linkedin.com/',
		},
		{
			img: 'images/team/Vishal.png',
			name: 'Vishal Konde ',
			role: 'UI/UX Designer',
			linkedinLink: 'https://www.linkedin.com/in/vishal-konde-a3b4b662/',
		},
		{
			img: 'images/team/pranavDevkar.jpeg',
			name: 'Pranav Devkar ',
			role: 'Frontend Developer',
			linkedinLink: 'https://www.linkedin.com/in/pd1311/',
		},
	];
	return (
		<div>
			<div className="teamPage">
				<div className="Heading py-4">
					<h1 className={style.pageHeading}>Our Team</h1>
				</div>
				<div className=" pb-5">
					<h1 className={style.pageSubHeading}>
						Meet the people who are working hard to make it success.
					</h1>
					<div className="d-flex justify-content-center">
						<div className={style.titleBorder}></div>
					</div>
				</div>
				{/* Team Member Cards Start */}
				<div className="container">
					<div className="row px-5 d-flex justify-content-center">
						{TeamMembers.map((member, index) => (
							<div className="col-lg-3 py-4" key={index}>
								<div className="card team-card ">
									<div className="card-body d-flex ">
										<div className="img-div">
											<img
												className="memberImg"
												src={member.img}
												alt={member.name}
											/>
										</div>
										<div className="memberContent py-2">
											<h1 className="member-name">{member.name}
											<div className='team-green-border'></div>
											</h1>
											<h3 className="member-role">{member.role}</h3>
											<div className="d-flex  justify-content-start">
												<a href={member.linkedinLink}>
													<img src={linkedinLogo} alt="Linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* ------------------------------------------------- */}
			</div>
		</div>
	);
}
