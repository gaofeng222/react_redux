/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';
import './styles/style.less'

class App extends React.Component {
    render(){ // Every react component has a render method.
        return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <div >
                <ToDoList />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)