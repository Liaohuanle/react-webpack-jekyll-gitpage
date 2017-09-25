import React , { PureComponent } from 'react'
import HeartAnimation from '../common/heart/heart.jsx'
const st = require('./layout.less')
export default class LayoutBody extends PureComponent{
  render(){
    return (
      <HeartAnimation heartNumber = { 1 }/>
    )
  }
}