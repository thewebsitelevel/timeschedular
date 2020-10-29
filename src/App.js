import React from 'react';

import Layout from './hoc/Layout/Layout';
import Scheduler from './components/Scheduler/Scheduler';

import './App.css';

const App = () => {
  return (
    <Layout>
      <Scheduler/>
    </Layout>
  );
}

export default App;
