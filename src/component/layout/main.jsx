import React , { PureComponent } from 'react'
import LayoutHeader from './header.jsx'
import LayoutBody from './body.jsx'
import './layout.less'
export default class MainLayout extends PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <LayoutHeader header={ 123 }/>
        <LayoutBody />
      </div>
    )
  }
}
