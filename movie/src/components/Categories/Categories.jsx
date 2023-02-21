import React, {Component} from 'react'
import './categories.scss'

export default class Categories extends Component {

    constructor(props) {
        super(props)
        this.state= {
            year: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: '1993',
                    name: '1993', 
                },
                {
                    key: '1994',
                    name: '1994'
                },
                {
                    key: '1999',
                    name: '1999'
                },
                {
                    key: '2001',
                    name: '2001'
                },
                {
                    key: '2002',
                    name: '2002'
                },
                {
                    key: '2003',
                    name: '2003'
                },
                {
                    key: '2008',
                    name: '2008'
                },
                {
                    key: '2017',
                    name: '2017'
                },
                {
                    key: '2014',
                    name: '2014'
                }
            ]
        }

        
    }

render() {


  return (
    
        <div className='categories'>
        {this.state.year.map(el => (
            <div key={el.key} onClick={()=> this.props.chooseYearHandleClick(el.key)}>{el.name}</div>
        ))}
    </div>
  )
}
}
