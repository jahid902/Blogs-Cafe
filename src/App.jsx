import React from 'react';
import Ans from './components/Ans/Ans';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='bg-emerald-50'>
      <Header></Header>
      <Main></Main>
      <Ans></Ans>
    </div>
  );
};

export default App;

