# Burger Shack Project

A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client will both be notified as this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

Twilio, a modern telecomm API service is used to implement SMS communication from the website to the client and restaurant.

## Stack

- Webpack with Babel, JSX, ES6, webpack dev server
- WebSockets using Node package ws on the server-side, and native WebSocket on client side
- ReactJS

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- body-parser
- dotenv
- ejs
- express
- knex
- ngrok
- twilio 

## Screenshots

!["Screenshot of homepage"]
(https://github.com/jenniferhsueh/burger_shack/blob/master/docs/homepage.png?raw=true)

!["Screenshot of order_confirmation"]
(https://github.com/jenniferhsueh/burger_shack/blob/master/docs/order_confirmation.png?raw=true)

