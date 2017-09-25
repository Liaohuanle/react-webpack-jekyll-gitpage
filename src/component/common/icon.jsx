import React , { PureComponent } from 'react'
import '../../assets/icon/icon.less'
export default class Icon extends PureComponent{
  render(){
    const { type, className } = this.props
    return(
      <i className={ `iconfont icon-${type} ${className}` }></i>
    )
  }
}