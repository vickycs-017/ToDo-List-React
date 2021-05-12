import React, { Component } from "react";
import './App.css';
import ListItem from "./Components/ListItem"


class App extends Component{
  constructor(){
    super();

    this.state={
      item:[],
      currentItems: {
        text: "",
        key:""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItems:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.item, newItem];
      this.setState({
        item:newItems,
        currentItems:{
          text:"",
          key:""
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.item.filter((item) => item.key !== key);
    this.setState({
      item:filteredItems
    })
  }
  editItem(text, key){
    const items = this.state.item;
    this.setState({
      item: items.filter((item) => item.key !== key),
      currentItems:{
        text
      }
    })
  }

  render(){
    return (
      <>
      <h1>ToDo List </h1>
      <div className="App">
        <header>
          <form id="to-do-form">
            <textarea id="task" placeholder="Enter Task" 
              value={this.state.currentItems.text}
              onChange={this.handleInput}/> <br />
            <button type="submit" onClick={this.addItem} id="btn">Add</button>
          </form>
        </header>
        <ListItem items = {this.state.item} deleteItem = {this.deleteItem} editItem={this.editItem}/>
      </div>
      </>
    )
  }
}

export default App;
