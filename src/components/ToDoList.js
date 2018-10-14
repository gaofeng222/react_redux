/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';
import List from './List'
import Input from './Input'

class ToDoList extends React.Component {
    componentWillMount(){
        this.setState({ // add an array of strings to state.
            list: ['thing1', 'thing2', 'thing3'],
            newToDo : 'test',
        })
    }
    onInputChange (event) {
        this.setState({ newToDo: event.target.value });
    }
    onInputSubmit(event){
        event.preventDefault()
        console.log(11111)
        this.setState((previousState)=>({
            list: [...previousState.list, previousState.newToDo ],
            newToDo : ''
        }));
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
                            <List listItems={this.state.list}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToDoList