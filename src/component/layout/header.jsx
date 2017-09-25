import React , { PureComponent } from 'react'
import './layout.less'
import Icon from '../common/icon.jsx'
export default class LayoutHeader extends PureComponent {
  render(){
    const { header } = this.props
    return(
      <div className={ 'header' }>
       <Icon type={'menu'} className={ 'menu' }/>
      </div>
    )
  }
}
