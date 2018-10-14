/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';

const Input = ({onChange,value}) => {
    return (
        <div>
            <form>
                <div
                    className="form-group">
                    <label
                        htmlFor="listInput">
                            Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="listItemInput"
                        onChange = {onChange}
                        placeholder="Add new todo"
                        />
                    <button
                         className="btn btn-primary">
                            Add Item
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Input
