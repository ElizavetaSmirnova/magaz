import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'
export class Order extends Component {
  render() {
    return (
      <div>
        <div className="bukket_good">
                    <img className="bukket-good_image" src={'./image/' + this.props.item.img} width="100" height="100"/>
                    <div className="bukket_description-content">
                        <p className="bukket-good_name">{this.props.item.title}</p>
                        <p className="bukket-good_price">{this.props.item.price}₽</p>
                    </div>
                    <FaTrash className='delete' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
      </div>
    )
  }
}

export default Order