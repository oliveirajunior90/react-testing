import React, { Component } from 'react'
import propTypes from 'prop-types'

class Headline extends Component {

    render() {

        const { header, desc } = this.props;

        if(!header) return null;

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{desc}</p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: propTypes.string,
    desc: propTypes.string,
    tempArr: propTypes.arrayOf(propTypes.shape({
        fName: propTypes.string,
        lName: propTypes.string,
        email: propTypes.string,
        age: propTypes.number,
        onlineStatus: propTypes.bool
    }))

}

export default Headline
