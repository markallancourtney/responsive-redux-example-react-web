# responsive-redux-example-web

This is an example of how to use <a href="https://github.com/markallancourtney/responsive-redux" target="_blank">responsive-redux</a> with React on the web.

# Usage

- Clone this repository
    - `git clone https://github.com/markallancourtney/responsive-redux-example-react-web.git`
- Change into this project directory
    - `cd responsive-redux-example-react-web`
- Install dependencies
    - `npm install`
- Start server
    - `npm start`
- Open <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> in your browser
- Resize the browser window and watch the values on the screen change
- Open the JavaScript console of your browser and see <a href='https://github.com/evgenyrodionov/redux-logger' target='_blank' rel='noopener noreferrer'>redux-logger</a> output when actions are dispatched and the Redux state changes.



#### File descriptions
- `App.js`
    - React app entry point. This is where the store is passed as a prop to the react-redux Provider.
- `store.js`
    - Shows how to set up the Redux store for use with React on the web.
- `breakpoints.js`
    - Developer defined breakpoints. Name and pixel size of breakpoints defined in this file.
