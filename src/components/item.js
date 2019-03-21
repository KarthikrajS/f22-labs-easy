import React from 'react';
import propTypes from 'prop-types';

class Item extends React.Component {

    state={
        complete:false,
        selected:false
    };

    handleComplete =(e)=>{
        this.setState({complete:!this.state.complete});
    };
    render(){
        const {iden,title,handleDelete,currentSelect,selectedItem} = this.props;
        return(
            <li className={selectedItem ? "list-group-item font-weight-bold text-danger text-capitalize d-flex justify-content-between my-2 ":"list-group-item text-capitalize  d-flex justify-content-between my-2 "} id={iden} onClick={currentSelect} >
                {this.state.complete ?<del>{title}</del> :<div>{title}</div>}
                <div className="todo-icon">
                    <span className="mx-2" onClick={this.handleComplete} >
                        {this.state.complete ? <i className="fas fa-redo text-secondary"></i>:<i className=" text-success fas fa-check"></i>}
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash"></i></span>
                </div>
            </li>
        )
    }
}

export default Item;