import React from 'react'

class AddUser extends React.Component {
  constructor(){
    super();
    this.state = {
      Name: "",
      Email: "",
      Phone: ""
    }
  }

  onChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    let data = {
      Name:this.state.Name,
      Email:this.state.Email,
      Phone:this.state.Phone
    }
    this.props.userData(data);
  }

  render(){
    return(
    <form onSubmit={this.onSubmit} autoComplete="off">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" placeholder="Enter name" 
        onChange={this.onChange}
        name = "Name"
        value = {this.state.Name}
        />
      </div>
      <div className="form-group">
        <label>Eamil:</label>
        <input type="text" className="form-control" placeholder="Enter Email" 
        onChange={this.onChange}
        name = "Email"
        value = {this.state.Email}
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" className="form-control" placeholder="Enter Phone" 
        onChange={this.onChange}
        name = "Phone"
        value = {this.state.Phone}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
    )
  }
}

export default AddUser;