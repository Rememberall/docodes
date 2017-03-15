import React from 'react';

export default class SuperHero extends React.Component {
    render() {
        return (
            <div style={{
                border: '1px solid black',
                margin: 5,
                padding: 10,
                borderRadius: 10,
                display: "inline-block",
                textAlign: 'center'
            }}>
                <h1>{this.props.name}</h1>
                <p>{this.props.info}</p>
                <img style={{
                    width: 300,
                    height: 500,
                }}
                    src={this.props.imageURL}/>
            </div>
        );
    }
}