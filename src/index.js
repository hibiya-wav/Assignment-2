import ReactDOM from 'react-dom/client';
import App from './App' // imports App component which serves the root component of our app

/*
* index.js
*
* Our React application starts here where this file is responsible with rendering the root
* react component into the index.html file or its designated mounting point
*
*/

// creates a root DOM node for our React App to mount in here the root of the index.html file
// this is where the React app is mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// render's the App component into the DOM for the application to be seen on our web browser.
root.render(<App></App>);