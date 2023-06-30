/* eslint-disable import/no-anonymous-default-export */
export default async function (req, res) {
	try {
		const { productId } = req.query;
		const response = await fetch(
			`${process.env.BASE_URL_BACKEND}/products/${productId}`
		)
			.then((response) => response.json())
			.then((json) => json);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error);
	}
}
