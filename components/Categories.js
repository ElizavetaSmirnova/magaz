import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'electronics',
                    name: 'электронника'
                },
                {
                    key: 'boots',
                    name: 'обувь'
                },
                {
                    key: 'animals',
                    name: 'товары для животных'
                }
            ]
        }
    }
  render() {
    return (
        <div className="menu">
          {this.state.categories.map(el => (
            <div key={el.key} className='nav-list' onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
          ))}
        </div>
    )
  }
}

export default Categories
