import React, { Component } from 'react'

class Headline extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { header, desc } = this.props;

        if(!header) return null;

        return (
            <div>
                <h1>{desc}</h1>
                <p>{desc}</p>
            </div>
        )
    }
}

export default Headline
