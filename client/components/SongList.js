import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends React.Component {

    renderSongs() {
        return this.props.data.songs.map(item => {
            return <li className="collection-item" key={item.id}>{item.title}</li>
        })
    }

    render() {
        if (this.props.data.loading) { return <em>Loading...</em> }

        return <ul className="collection">
            {this.renderSongs()}
        </ul>
    }
}

const query = gql`
{
    songs{
        id
        title
    }
}
`

export default graphql(query)(SongList);