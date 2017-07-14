# coinsimulator
Simulates buying crypto-currencies over time.

Using historical data from CoinMarketCap, it runs a strategy against each week of data, buying coins.
At the end of the run, it tells you the value of your holdings.

**Requires Node.js.**

## Default Strategy
By default buys the top 50 coins, by market cap, spending a total of $100 each week. To change the number of coins or the amount spend, pass use the command line arguments.

## Install
```
git clone git@github.com:johntitus/coinsimulator.git
cd coinsimulator
npm install
```
## Run
```
node simulate
```
## Options
```
-b, --begin [date] - Start date (YYYY-MM-DD)
-e, --end [date] - End date(YYYY-MM-DD)
-w, --weeklySpend [amount] - Amount to spend on a weekly basis
-n, --numCoins [count] - Number of coins to buy
```
## Sample output
(runs from June 1, 2016 till present):
```
node simulate.js -b 2016-06-01 -w 20 -n 50
...
Strategy: spend $20 weekly on top 50 coins
Spent: $1,100
Value: $15,169.285
Profit: $14,069.285
Growth: 1279.03%
```
