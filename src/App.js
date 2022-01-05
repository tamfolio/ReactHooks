import React from 'react';
import './App.css';
import FormState from './FormState';
import IncrementState from './IncrementState';
import Reducer from './Reducer';
import RefTutorial from './RefTutorial';


function App() {
  return (
    <div className="App">
      <IncrementState/>
      <FormState/>
      <Reducer/>
      {/* <EffectTutorial/> */}
      <RefTutorial/>
    </div>
  );
}

export default App;
