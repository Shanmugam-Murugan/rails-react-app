import React, { Component } from 'react'

class UsersInfo extends Component {
  render() {
    return (
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            console.log(this.props.getData.length)
          }
        </tbody>
      </table>
    )
  }
}

export default UsersInfo;