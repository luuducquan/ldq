import React, { Component } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: this.props.task.id,
           name: this.props.task.name,
           description: this.props.task.description,
           date: this.props.task.date,
           piority: this.props.task.piority,
        }
    }
    
   
    onChange = (e) => {
        
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name] : value
        });
    }

    onUpdate = () =>{
        var info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.description = this.state.description;
        info.date = this.state.date;
        info.piority = this.state.piority;
        this.props.onUpdate(info);
    }
    
   
    render() {
       var {task} = this.props;
        return (
            <form  className=" border px-2" style={{ width: '100%' }}>
                <div className="mt-3 ">
                    <input name="name" 
                    onChange={(e) => this.onChange(e)}
                    type="text" 
                    style={{ width: '100%' }} defaultValue={task.name} />
                </div>
                <div>
                    <b>Description</b>
                    <div>
                        <textarea onChange={(e) => this.onChange(e)} 
                        name="description" style={{ width: '100%' }} defaultValue={task.description} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <b>Due Date</b>
                        <input 
                        name="date" type="date" 
                        onChange={(e) => this.onChange(e)}
                        style={{ width: '80%', height: '40px' }} 
                        defaultValue={this.props.task.date} />
                    </div>
                    <div className="form-group col-6">
                        <b>Piority</b>
                        <select name="piority" 
                        onChange={(e) => this.onChange(e)} 
                        defaultValue={task.piority} className="form-control" 
                        style={{ width: '80%', height: '40px' }}>
                            <option >low</option>
                            <option >normal</option>
                            <option >high</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={this.onUpdate} style={{ width: '100%' }} type="submit" className="btn btn-success mb-3">Update</button>
                    
                </div>
            </form>
        );
    }
}

export default Update;