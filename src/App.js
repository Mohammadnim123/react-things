import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      thingList : [],

     
    myName : "Mohammad Nimrawi"
    };

  }
  
  // 
  render(){
    return(
      <div className="content">
      <Header thingsCount={this.state.thingList.length} />
      <ThingList thingList={this.state.thingList} />
      <ThingItemForm whenCreate={(data)=> {
        data.id = this.state.thingList.length+1;
        let curr = this.state.thingList;
        curr.push(data);
        this.setState({
          thingList : curr
        })

        }} />
        
      <Footer myName={this.state.myName} />
      </div>
      
    )
  }

  reset(){
    this.setState({
      thingList : []
    })
  }
}

function ThingList(props){
  return(
    <>
    <ul>
      {props.thingList.map(thing=> <Thing thing={thing} key = {thing.id}/>)}
      
  </ul>

  
  </>
  )
}

function Thing(props){
  return(
  <li> Name :  <strong>{props.thing.name}</strong> ||||| type : <strong>{props.thing.type}</strong> ||||| ID : <strong>{props.thing.id}</strong></li>
  )
}


class ThingItemForm extends React.Component{
constructor(){
  super();
  this.state = {
    id:"",
    name:"",
    type:""
  
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event){
  event.preventDefault();
  // alert(this.state.name);
  this.props.whenCreate(this.state);
}


  render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <label> Thing Name
                <input type="text" id="name" placeholder="name" onChange={this.handleChange}></input>
                <input type="text" id="type" placeholder="type" onChange={this.handleChange}></input>
                <input type="submit" value="Add"></input>
            </label>
            
        </form>
    )
}

handleChange(event){
let name2 = document.getElementById("name").value;
let type2 = document.getElementById("type").value;

console.log(name2)
console.log(type2)



this.setState({
name: name2,
type: type2
})
}



}



function Header(props){
return <header><h1>Welcome In Things App</h1><br/> <p>you have now {props.thingsCount} item</p> </header>;
}

function Footer(props){
  return <footer><p>@copyright {props.myName}</p></footer>;
  }






export default App;
