import React, { Component } from 'react'
import { getMonstersByCR } from '../actions/actions'
import { connect } from 'react-redux'
import './Filter.css'


class Filter extends Component {
    constructor() {
        super()
        this.state = {
            CR: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        console.log('got the change')
        event.preventDefault()
        this.setState({ CR: event.target.value })
        this.handleClick(event)
    }

    handleClick(event) {
        console.log('got the click')
        event.preventDefault()
        this.props.getMonstersByCR(this.state.CR)
        // this.clearInput()
    }
    
    clearInput() {
        this.setState({
            CR: 'select'
        })
    }
    
    render() {
        console.log(this.props)
        const CRList = ['select', 0, .125, .25, .5, 1, 2, 3, 4, 5, 6, 
            7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 
            22, 23, 24, 25, 26, 27, 28, 29, 30]
        const monsterList = this.props.monsters
        var opts = CRList.map((item, index) => {
            return (
                <option value={this.state.CR} key={item}>{item}</option>
                )
            })

        return (
            <form onChange={this.handleChange}>
            <label>filter monsters by challenge rating</label>
                <select>
                    {opts}
                </select>
                {/* <button onClick={() => this.handleClick}>click</button> */}
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        monsters: state.monsters.monsters
    }
}

export default connect(mapStateToProps, { getMonstersByCR })(Filter)