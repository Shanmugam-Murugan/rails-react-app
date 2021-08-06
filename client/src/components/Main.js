import React from 'react';
import AddUser from './AddUser';
import UsersInfo from './UsersInfo';
import axios from 'axios';

export class UsersList extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  
  create = data =>{
    axios.post('http://localhost:5000/api/v1/users', data).then(res => {
      console.log(res);
    })
  }

  componentDidMount(){
    this.getAll();
  }

  getAll(){
    axios.get('http://localhost:5000/api/v1/users').then(res => {
      console.log(res.data);
      this.setState({
        data:res.data
      })
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <AddUser userData = {this.create}/>
          </div>
          <div className="col-6">
            <UsersInfo getData = {this.state.data}/>
          </div>
        </div>
      </div>
  )
}

}
export default UsersList;