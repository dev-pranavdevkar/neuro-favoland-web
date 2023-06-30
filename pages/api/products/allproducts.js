export default async function (req, res) {
	const response = await fetch(
		`${process.env.BASE_URL_BACKEND}/products/allproducts`
	)
		.then((response) => response.json())
		.then((json) => {
			return json;
		});
	res.status(200).json(response);
}
