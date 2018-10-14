/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';

const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.listItems.map( (el,i) => (
                        <li key={i}><span>{el}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default List