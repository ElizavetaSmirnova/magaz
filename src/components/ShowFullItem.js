import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
        <div class="product-cards">
            <div class="product-description">
                <div class="info-card">
                    <p class="product-name">{this.props.item.title}</p>
                    <h3 class="product-price">{this.props.item.price}₽</h3>
                </div>
                <h3 class="decript">описание</h3>
                <ul class="desc-list">
                    <li>{this.props.item.descel1}</li>
                    <li>{this.props.item.descel2}</li>
                    <li>{this.props.item.descel3}</li>
                    <li>{this.props.item.descel4}</li>

                </ul>
            </div>
            <div class="changes" id="main-place">
                <div class="photo-elem">
                    <div class="main-photo">
                        <img id="bannerImage" src={'./image/' + this.props.item.img} alt="" class="image-size"/>
                    </div>
                </div>
                <div class="small-photo">
                    <button class="picture-button" onclick="changeImage('image/elekt/clock-black1.svg')"><img width="60" src={'./image/' + this.props.item.smimg1} alt=""/></button>
                    <button class="picture-button" onclick="changeImage('image/elekt/clock-black2.svg')"><img src={'./image/' + this.props.item.smimg2} alt=""/></button>
                    <button class="picture-button" onclick="changeImage('image/elekt/clock-black3.svg')"><img src={'./image/' + this.props.item.smimg3} alt=""/></button>
                    <button class="picture-button" onclick="changeImage('image/elekt/clock-black4.svg')"><img src={'./image/' + this.props.item.smimg4} alt=""/></button>
                </div>
            </div>
        </div>
    )
  }
}

export default ShowFullItem