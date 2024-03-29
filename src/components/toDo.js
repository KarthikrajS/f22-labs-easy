import React from 'react';

class ToDo extends React.Component{
render(){
    const {item,handleChange,handleSubmit} = this.props;
    return(
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" value={item}
                           onChange={handleChange}
                           placeholder="Add to To-Do List"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">Add</button>
            </form>
        </div>
    )
}
}

export default ToDo;