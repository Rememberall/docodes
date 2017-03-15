import React from 'react';

export default class SearchResult extends React.Component {
    render() {
        return (
            <div style={{
                border: '1px solid black',
                margin: 5,
                padding: 3,
                borderRadius: 10,
            }}>
                <a href={'https://' + this.props.link}>{this.props.title}</a>
                <br/>
                <a href={'https://' + this.props.link} style={{color: 'green'}}>{this.props.link}</a>
                <p>{this.props.content}</p>
            </div>
        );
    }
}