// 6-payment_token.js


module.exports = function getPaymentTokenFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({ data: 'Successful response from the API' });
		} else {
			resolve(undefined);
		}
	});
};
