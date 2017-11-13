import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { ACTION_checkName, ACTION_checkAddy, ACTION_checkPhone, ACTION_addToBook } from './actions';


class App extends Component {
  
  checkName(e){
      let name = e.target.value;

      this.props.dispatch(ACTION_checkName(name));
    }

  checkAddy(e){
      let addy = e.target.value;

      this.props.dispatch(ACTION_checkAddy(addy));
    }  

  checkPhone(e){
      let phone = e.target.value;

      this.props.dispatch(ACTION_checkPhone(phone));
    }
  
  addToBook(event, entry, book){
      event.preventDefault();

      let entryAdded = book.push(entry);

      this.props.dispatch(ACTION_addToBook(entryAdded));
    } 


  render() {
    return (
      <div className="App">
        <div className="Form">
          <form>
            <h1>Address Book</h1>
            <div>
              <label htmlFor="name">Full Name: <input id="name" name="name" type="text" placeholder="Last, First" onChange={(e) => this.checkName(e)} required/></label>
            </div>
            <div>
              <label htmlFor="address">Address: <input id="address" name="address" type="text" placeholder="Street, City, State, Zip" onChange={(e) => this.checkAddy(e)} required/></label>
            </div>
            <div>
              <label htmlFor="phone">Phone Number: <input id="phone" name="phone" type="tel" placeholder="xxx-xxx-xxxx" onChange={(e) => this.checkPhone(e)} required/></label>
            </div>
            <div>
              <input type="submit" name="submit"  onClick={(event) => this.addToBook(event, this.props.personInfo, this.props.addressBook)} value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  personInfo: state.personInfo,
  name: state.personInfo.name,
  address: state.personInfo.address,
  phone: state.personInfo.phone,
  addressBook: state.addressBook
});

export default connect(mapStateToProps)(App);
