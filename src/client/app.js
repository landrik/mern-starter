import React from 'react';


export default class App extends React.Component {
  constructor(){
    super();
    // eslint-disable-next-line
    console.log(`This app is called ${process.env.appName}`);
  }
  render() {
      return (
         <h1>Hello from React!</h1>
      );
  }
}
