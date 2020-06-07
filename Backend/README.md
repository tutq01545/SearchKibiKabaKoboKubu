# Backend
Code base to query data from Google JSON API. <br>
We use Node.JS 6.14.4
# Install dependencies
npm install

# Setup for local deployment
## 1. Change query string
- Edit /routes/google.js
- Add query term to variable queryString
## 2. Start Express JS server
- From current directory, run npm start
## 3. Open deployed page
- Open deployed page at localhost:3000/google (default port is 3000, may differ if port 3000 is already taken)