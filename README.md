# Cryptos
by Jay Schwartz, Miles McLeod, and Henry Chen


## Background and Overview
Cryptos is an app that all

## Functionality & MVP
* View Cryptocurrency Coin Prices for a single exchange
* (1) API - Bittrex
* Graph of coin pricing using Chart.js
* View coin specific news
* Search News
* Demo Emulator & Site (splash page)


## Bonus Features
* Buy/Sell coins
* Utilize coinbase auth
* Get data from multiple API’s
* Utilize iPhone accelerometer for graphs when sideways
* Favorite Coins (with user sign-in)
* Historical data storage generation
* Include exchange Index Tracking

## Technologies & Technical Challenges

* Backend
  * MongoDB, ExpressJS, NodeJS, Mongoose.JS

* Frontend
  * ReactNative for App, ChartJS,  HTML/CSS/JS for browser demo/splash page

* Refining API Data

* Accessing exchange data
  * Bittrex has a publicly available dataset of current pricing of multiple coins.  We plan to extract the current price and calculate the change over the last 24 hours (non-rolling)
  * Coinbase has a publicly available dataset of three coins.  Since all of the other coins are traded using one of those three and are priced in Bitcoin, we will use the current Bitcoin to USD from Coinbase API to calculate the current price of all other coins in both Bitcoin and USD.

* The data we receive from Bittrex & Coinbase will also be stored in our database to allow for historical data generation and create graphs further back as we generate the data.


UX
Frontend Interface
The frontend will implement calls to the backend API for current cryptocurrency data
The frontend will implement API calls directly to a News API for current news search
Swipe to change between list of coins & news search
Select a coin to show coin specific info on the bottom & swipe to navigate between:
news
data
Graph
Touch pricing to change between
% change
$ change
Bitcoin change
Backend
Our backend will be implemented with MongoDB, Express, and Node.
The backend will make periodic requests to the Bittrex API and then store coin and exchange data in the database. API requests from our frontend will hit an action in our backend that sends coin data from our database, and not from the foreign API.
The data will be served to the frontend in JSON format via Express.
Project Flowchart


## Accomplished over the Weekend

* Learn the basics of the MERN stack build a simple CRUD backend using MongoDB, Express, and NodeJS.
* Begin setting up backend AJAX requests to Bittrex API and draw a sample database structure
* Test our API endpoints with AJAX requests from the console
* Learn React Native and build the ‘Home’, ‘News’, and 'Wallet' tab with dummy data
* Acquired a Route53 domain name (cryptosapp.io) and hosted on CloudFront with https certificate
* Built out the News component with Search function
* Bulit detailed view of coin info under home screen

---

## Group Members & Work Breakdown

### Implementation Timeline

**Day 1**
Have the project file structure setup and get the branches setup as well
Be able to fetch API pricing data and store in our DB so that the information can be access at a later time
Render on frontend React component for the ‘Home’ and ‘News’ tab

**Day 2**
Polish up the UI for pricing data and also build out the mini-details overview and placeholder for charts
Determine if charting capabilities is possible and if we are still on schedule

**Day 3**
Get a working live demo of the app on the xCode simulator

**Day 4**

**Day 5**
Start Production README and add relevant information along with existing wireframes
Start researching the

**Day 6**
Finish Production README and start Demo site design

**Day 7**
Finish Demo site with active phone simulators and descriptions

## Wireframes

![wire1]()

![wire1]()

![wire1]()

![wire1]()

![wire1]()

![wire1]()

![wire1]()

![wire1]()


## Plan for getting users and reviews

* The team will ask friends and family to test out the app from the AppStore / Google Apps. Each member will share with at least 20 friends and family and ask for good reviews.
* We will also create a demo website page that illustrates the app Functionality and asks for feedback
