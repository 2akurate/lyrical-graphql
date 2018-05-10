import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

class SongCreate extends React.Component {

    constructor(props) {
        super(props)
        this.state = { title: '' }
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(() => hashHistory.push('/'))
    }

    render() {
        return <div>
            <Link to="/" className="btn-floating btn-medium blue left">
                <i className="material-icons">chevron_left</i></Link>
            <br /> <br />
            <h4>Create Song</h4>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Song Title</label>
                <input
                    onChange={event => this.setState({ title: event.target.value })}
                    value={this.state.title} />
            </form>
        </div>
    }
}

const mutation = gql`
mutation AddSong($title:String){
                addSong(title: $title){
                id
        title
            }
        }
        `

export default graphql(mutation)(SongCreate)