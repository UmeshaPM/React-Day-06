import './App.css';

function App() {
  return (
<>
  
<h1>Q-01 :- </h1>
<h2>What is an event in react?</h2>
<p>An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.</p>

<h1>Q-02 :-</h1>
<h2>What is memory leak and how to overcome?</h2>
<p>Memory leak occurs when programmers create a memory in heap and forget to delete it.The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly .
Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.</p>

<h1>Q-03 :-</h1>
<h2>Do you prefer function-based or class component and why ?</h2>
<p><ul className='bold'>
  <li>Functional Component :-</li>
  </ul>A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components.
  <ul className='bold'>
  <li>Class Component :-</li>
  </ul>A class component requires you to extend from React. Component and create a render function which returns a React element. - It must have the render() method returning JSX. - Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component. - Also known as Stateful components because they implement logic and state. - React lifecycle methods can be used inside class components - It requires different syntax inside a class component to implement hooks. - Constructor are used as it needs to store state.
</p>

<h1>Q-04 :-</h1>
<h2>Explain reducer as pure function in redux</h2>
<p>In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.</p>

<h1>Q-05 :-</h1>
<h2>Why do we use redux thunk?</h2>
<p>The most common use case for Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API. Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.</p>

<h1>Q-06 :-</h1>
<h2>What do you know about NPM?</h2>
<p>npm is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software. npm is free to use. npm is installed with Node.js. npm can manage dependencies. All npm packages are defined in files called package.json. Many organizations also use npm to manage private development. The content of package.json must be written in JSON.</p>
<br/> 
</>
  );
}

export default App;
