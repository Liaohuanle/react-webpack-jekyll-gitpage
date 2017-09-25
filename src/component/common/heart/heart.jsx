import React , { PureComponent } from 'react'
import Icon from '../icon.jsx'
import './styles.less'
export default class HeartAnimation extends PureComponent{
  get heartMap(){
    const { heartNumber } = this.props
    const array = new Array( heartNumber || 1 ).fill(1)
    const result = array.map((item, index)=>{
      return (
        <Icon key={ index } type='heart'/>
      )
    })
    return(
      result
    )
  }
  render(){
    return(
      <div className={ 'heartContainer' }>
      { this.heartMap }
      </div>
    )
  }
}