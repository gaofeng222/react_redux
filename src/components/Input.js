/**
 * Created by gaofeng on 2018/10/14.
 */
import React from 'react';

const Input = ({onInputSubmit,onInputChange,value}) => {
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
                        value = {value}
                        onChange = {onInputChange}
                        placeholder="Add new todo"
                        />
                    <button
                         className="btn btn-primary" onClick={onInputSubmit}>
                            Add Item
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Input
