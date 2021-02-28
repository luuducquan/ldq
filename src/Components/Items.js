import React, { Component } from 'react';
import Update from './Update';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm : false,
            
        }
    }
    
    onDelete = () =>{
        this.props.onDelete(this.props.task.id);
    }

    onOpenForm = () =>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        });
        
    }


    render() {
        var {task} = this.props;
        var elmTaskForm = this.state.isDisplayForm ? <Update 
        task={task} 
        onSubmit={this.props.onSubmit}
        onUpdate={this.props.onUpdate} /> : '';
        return (
            <div className="container border mt-3 pt-3">
                <div className="row">
                    <div className="col-6">
                        <div className="form-check">
                            <label className="form-check-label ">
                                <input type="checkbox" defaultValue="checkedValue"  />{" "}
                                {task.name}
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <button 
                        onClick={this.onOpenForm}
                        type="submit" 
                        className="btn btn-primary mb-5">Detail</button>

                    </div>
                    <div className="col-3">
                        <button 
                        onClick={this.onDelete}
                        type="submit" 
                        className="btn btn-danger mb-5">Remove</button>

                    </div>
                </div>
                <div className="row ">
                    {elmTaskForm}
                </div>
            </div>
        );
    }
}

export default Items;