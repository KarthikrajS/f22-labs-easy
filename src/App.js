import React, { Component } from 'react';
import ToDo from './components/toDo';
import List from './components/list';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


class App extends Component {
    state={
        itemArray:[],
        id:0,
        item:'',
        selectedItem:1
    };
    handleChange = (e) =>{
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = (e) =>{
        e.preventDefault();
        let newItem = {
            id:this.state.id,
            title:this.state.item,

        };
        const update = [...this.state.itemArray,newItem];
        this.setState({
            itemArray:update,
            item:'',
            id:uuid()
        });
    };
    clearList = (e) =>{
        this.setState({itemArray:[]});
    };
    handleDelete =(id)=>{
        const remainigItems = this.state.itemArray.filter(item =>item.id !== id);
        this.setState({itemArray:remainigItems});
    };
    currentSelect = (id)=>{
        this.setState({selectedItem: id});
        console.log(this.state.selectedItem);


    }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-center">To Do</h3>
                    <ToDo item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    <List itemArray={this.state.itemArray} currentSelect={this.currentSelect} clearList={this.clearList} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem}  />
                </div>
            </div>
        </div>

    );
  }
}

export default App;
