import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header';

// css
import '../../../bootstrap.scss';

export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={() => <div></div>} exact />
      <div style={{ padding: 20 }}>
        <Header />
      </div>
    </BrowserRouter>
  )
}


