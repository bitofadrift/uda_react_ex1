import React, { Component } from 'react'

class ListUsersProfiles2 extends Component {
  render() {

    // console.log('Props', this.props)
    return (
      <div>
      <ol className='profiles-list'>
        { this.props.profiles.map( profile =>(
          <li key={profile.id} className='profile-list-item' >Testing { this.props.users[profile.userID].name} favorite movie is { this.props.movies[`${profile.favoriteMovieID}`].name}
          </li>
        )
        ) }
      </ol>
      </div>
    )
  }
}

export default ListUsersProfiles2
