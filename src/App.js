import React,{Component} from 'react';
import SCP from "./SCP";

class App extends Component
{
    render()
    {
      return(
        <SCP scp={ this.state.scp}/>

      );
    }
    state = { scp: []}

    componentDidMount()
    {
      fetch('https://project-8f29.restdb.io/rest/content',
      {
        method: 'GET',
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60c9d57ae2c96c46a24635c0",
          "content-type": "application/json"
        }
      })
      .then(result => result.json())
      .then((data) => { this.setState({scp: data})})

      .catch(console.log);
    }
   
}


export default App;
