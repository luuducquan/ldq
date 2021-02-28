import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            piority:"normal",
            date: ""
        }
    }
    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        });
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    
    render() {
        
        return (

            <form onSubmit={this.onSubmit} className="col-5 border">
                <h3 className="text-center">New Task</h3>
                <div>
                    <input 
                    name="name" 
                    onChange = {this.onChange}
                    defaultValue={this.state.name}
                    type="text" 
                    style={{ width: '100%' }} 
                    placeholder="add new task" />
                </div>
                <div>
                    <b>Description</b>
                    <div>
                        <textarea  name="description" defaultValue={this.state.description} onChange = {this.onChange} style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <b>Due Date</b>
                        <input name="date"  defaultValue={this.state.date} onChange = {this.onChange} type="date" style={{ width: '80%', height: '40px' }} />
                    </div>
                    <div className="form-group col-6">
                        <b>Piority</b>
                        <select name="piority" onChange = {this.onChange} defaultValue={this.state.piority}  className="form-control" style={{ width: '80%', height: '40px' }} required>
                            <option value="low" >low</option>
                            <option value="normal">normal</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                </div>
                <div>
                <button style={{ width: '100%' }} type="submit" className="btn btn-success mb-3">Add</button>
                </div>
            </form>

        );
    }
}

export default Add;