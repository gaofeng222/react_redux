/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';

const List = (props) => {
    const list = props.listItems.map((item, i)=>(
        <li style={styleDes.liStyle} key={i}>
            <div
                style={
                    item.done
                        ? styleDes.divNoneStyle
                        : styleDes.divStyle
                }
                onClick={() => props.onListItemClick(i)}
            >{item.val}</div>
            <span onClick={() => props.onListDeleteClick(i)} className="btn btn-danger">x</span>
        </li>
    ));
    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
}
const styleDes = {
    liStyle: {
        margin: '20px auto'
    },
    divNoneStyle: {
        textDecoration: 'none',
        fontSize: '20px',
        width: 350,
        display: 'inline-block'
    },
    divStyle: {
        textDecoration: 'line-through',
        fontSize: '20px',
        width: 350,
        display: 'inline-block'
    }
}
export default List