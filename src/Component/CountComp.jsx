import React,{Component} from "react";

class CountComp extends Component{

       state ={
        Count:1,
        name:"kayal"
       };

 handleadd = ()=>{
      
     this.setState({Count:this.state.Count+1})  
      console.log("kghf")

    }

 render() {
        return(
          <>
          <h1>{this.props.name} </h1>
          <h1>Count{this.state.Count}</h1>
          <button onClick={this.handleadd}>Add</button>
          
          </>
        )
    }
}
export default CountComp