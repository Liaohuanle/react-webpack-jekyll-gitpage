import React from 'react'
import ReactDom from 'react-dom'
import MainLayout from './src/component/layout/main'
ReactDom.render(
  <div>
    <MainLayout header={ 123 }/>
  </div>,
  document.getElementById('root')
);
