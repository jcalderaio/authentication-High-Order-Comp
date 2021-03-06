import React from 'react';
import Header from './Header';

const App = props => {
  return (
    <div>
      <Header />
      {props.children} {/* If our App component has children, show them!!! */}
    </div>
  );
};

export default App;
