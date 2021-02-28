import React, { Component } from 'react';
import Items from './Items';


class List extends Component {
    constructor(props) {
        super(props);
        this.state= {
            keywork : ''
        }
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.props.onSearch(name ==='keywork' ? value : this.state.keywork)
        this.setState({
            [name] : value
        });
    }
    
    render() {
        var {keywork} = this.state;
        var {tasks} = this.props;
        var elmTask = tasks.map((task,index) =>{
            return <Items key={task.id} onSubmit={this.props.onSubmit} task={task} onDelete={this.props.onDelete} 
            onUpdate={this.props.onUpdate} />
        })
        return (
            <div  className="col-7 border">
                <h3 className="text-center">To Do List</h3>
                <div>
                    <input
                     name="keywork"
                     onChange={this.onChange}
                     value={keywork}
                     type="text" 
                     style={{ width: '100%' }} 
                     placeholder="Search..." />
                </div>
                {elmTask}
                <div className="container border mt-2" style={{ backgroundColor: 'darkgrey' }}>
                    <div className="row mt-4">
                        <div className="col-6">
                            <label >

                                Bulk Action:
                  </label>
                        </div>
                        <div className="col-3">
                            <button  type="submit" className="btn btn-primary mb-5">Done</button>
                            
                        </div>
                        <div className="col-3">
                            <button  type="submit" className="btn btn-danger mb-5">Remove</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;