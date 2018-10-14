/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';
import List from './List'
import Input from './Input'

class ToDoList extends React.Component {
    componentWillMount(){
        this.setState({ // add an array of strings to state.
            list: [{val:'More snacks', done: false}, {val:'More money', done: false}, {val:'More traveling', done: false}],
            newToDo : 'test',
        })
    }
    onInputChange (event) {
        this.setState({ newToDo: event.target.value });
    }
    onInputSubmit (event) {
        event.preventDefault();
        this.setState((previousState)=>({
            list: [...previousState.list,  {val: previousState.newToDo, done: true }], // notice the change here
            newToDo: ''
        }));
    }
    onListItemClick (i){ // takes the index of the element to be updated
        this.setState((previousState)=>({
            list: [
                ...previousState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                ...previousState.list.slice(i+1) // takes everything after the index passed in and adds it to the array.
            ]
        }))
    }
    onListDeleteClick(i){
        console.log(11111)
        this.setState((previousState) => ({
            list : [...previousState.list.slice(0, i),...previousState.list.slice(i+1)]
        }))
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do List</h1>
                            <hr/>
                            <Input value={this.state.newToDo} onInputChange={this.onInputChange.bind(this)} onInputSubmit = {this.onInputSubmit.bind(this)}/>
                            <List listItems={this.state.list} onListItemClick={this.onListItemClick.bind(this)} onListDeleteClick={this.onListDeleteClick.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToDoList