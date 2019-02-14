import React, { Component } from 'react'

class ListUsersProfiles extends Component {
  render() {
    // console.log('Props', this.props)
    return (
      <ol className='profiles-list'>
        { this.props.profiles.map( profile =>{
          return(
          <li key={profile.id} className='profile-list-item' > { this.props.users[`${profile.userID}`].name} favorite movie is { this.props.movies[`${profile.favoriteMovieID}`].name}
          </li>
        )
        }
        ) }
      </ol>
    )
  }
}

export default ListUsersProfiles
