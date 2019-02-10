import React, { Component } from 'react'

class ListUsers extends Component {
  render() {
    // console.log('Props', this.props)
    return (
      <ol className='users-list'>
        { this.props.users.map( user =>(
          <li key={user.id} className='user-list-item' >
            <div className='user-details' >
              <p>{ user.name }</p>
              <p>{ user.userName }</p>
            </div>
          </li>
        )
        ) }
      </ol>
    )
  }
}

export default ListUsers
