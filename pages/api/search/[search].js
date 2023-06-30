export default async function (req, res) {
	try {
		const { search } = req.query;
		const response = await fetch(
			`${process.env.BASE_URL_BACKEND}/products?search=${search}`
		)
			.then((response) => response.json())
			.then((json) => json);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error);
	}
}
