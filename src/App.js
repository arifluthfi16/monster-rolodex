import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'


class App extends  Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json();})
    .then((users)=>{this.setState({monsters:users})})
    .catch((err)=>{console.log(err);});


  }

    render(){
    const {monsters, searchField} = this.state;
    const filter = monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return(
        <div className='App'>
          <h1>Monster Rolodex </h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={e=>this.setState({searchField:e.target.value})}
          />
          <CardList monsters={filter}/>
        </div>
    )
  }
}
export default App;
