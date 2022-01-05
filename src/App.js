import React from 'react';
import './App.css';
import EffectTutorial from './EffectTutorial';
import FormState from './FormState';
import IncrementState from './IncrementState';
import Reducer from './Reducer';

function App() {
  return (
    <div className="App">
      <IncrementState/>
      <FormState/>
      <Reducer/>
      <EffectTutorial/>
    </div>
  );
}

export default App;
