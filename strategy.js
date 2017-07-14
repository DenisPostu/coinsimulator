/*
A strategy needs to export a function that takes in spending settings, current holdings and a week of coin data, 
and returns the updated holdings object.

Example of holdings object:
holdings = {
	'bitcoin': {
		spent: 120, // dollars spent on this coin so far
		value: 452, // value of the coin in USD (taken from latest week of data)
		numCoins: 3.215 // number of this coins bought so far;
	}
}
*/

let bitcoinPrice;

function buyCoin({ weeklySpend, numCoins }, holdings, coin) {
	let perCoin = weeklySpend / numCoins;

	if (coin.name.toLowerCase() == 'bitcoin'){
		bitcoinPrice = coin.priceUSD;
	}
	if ( typeof holdings[coin.name] == 'undefined' ){
		holdings[coin.name] = {
			spent: 0,
			value: 0,
			numCoins: 0
		};
	}
	
	let numCoinsToBuy =  perCoin / coin.priceUSD;

	console.log('Buying ' + coin.name + ' at $' + coin.priceUSD + ' - ' + numCoinsToBuy + ' coins');

	holdings[coin.name].spent = holdings[coin.name].spent + perCoin;
	holdings[coin.name].numCoins = holdings[coin.name].numCoins + numCoinsToBuy;
	holdings[coin.name].value = holdings[coin.name].numCoins * coin.priceUSD;

	return holdings;
}

module.exports = function(spendingSettings, holdings, coinData){
	coinData = coinData.slice(0, spendingSettings.numCoins);

	coinData.forEach( coin => {
		holdings = buyCoin(spendingSettings, holdings, coin);
	});

	return holdings;
}