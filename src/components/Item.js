import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
         <div className="card">
        <img onClick={() => this.props.onShowItem(this.props.item)} src={'./image/' + this.props.item.img} alt="product-photo"/>
        <div className="product-info">
            <h1 className="price">{this.props.item.price} ₽</h1>
            <p className="product-describe">{this.props.item.title}</p>
        </div>
        <div className="button" onClick={() => this.props.onAdd(this.props.item)}><a className="addToBucket" >добавить в корзину</a></div>
      </div>
    )
  }
}

export default Item