import React, { Component } from 'react';
import './App.css';
import Add from './Components/Add'
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      keywork: ''
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
    }
  }

  
  S4(){
     return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID(){
     return this.S4() + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + this.S4() + this.S4();
  }
  
  onSubmit = (data) => {
    var {tasks} = this.state;
    if(data.name === ""){
      alert("bạn cần nhập thông tin tiêu đề");
    }else{
      data.id = this.generateID();
      tasks.push(data);
    }
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  findIndex = (id) =>{
    var {tasks} = this.state;
    var result = -1
    tasks.forEach((task,index) =>{
      if(task.id === id){
        result = index;
      }
      
    });
    return result;
  }

  onUpdate = (info)=>{
    var {tasks} = this.state;
    var index = this.findIndex(info.id);
    tasks[index] = info;
    
  }

  onDelete = (id) =>{
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !==-1){
      tasks.splice(index,1);
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));  
    }
  }

  onSearch = (keywork) => {
    this.setState({
      keywork : keywork.toLowerCase()
    });
  }

  render() {
    var {tasks,keywork} = this.state;
    if(keywork){
      tasks = tasks.filter((task) =>{
        return task.name.toLowerCase().indexOf(keywork) !== -1;
      });
    }
    return (
      <div className="App">
      <div className="container mt-3">
        <div className="row">
          <Add onSubmit={this.onSubmit} />
          <List tasks ={ tasks } 
          onSearch={this.onSearch}
          onSubmit={this.onSubmit} 
          onDelete ={this.onDelete} 
          onUpdate={this.onUpdate} />
          
        </div> 
        </div>

    </div>
    );
  }
}

export default App;

