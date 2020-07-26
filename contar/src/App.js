import React, { Component } from 'react'
import './style.css'



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      numero:0,
      botao: 'Iniciar'
    };


      this.time=null;
      this.iniciar = this.iniciar.bind(this)
      this.parar = this.parar.bind(this)
  }

  iniciar(){
      let state= this.state
      if(this.time !==null){
        clearInterval(this.time)
        this.time=null;
        state.botao='Iniciar'
      }else{
        this.time=setInterval(()=>{
          let state= this.state;
          state.numero +=0.1
          this.setState(state)
         
      },100)
        state.botao='Pausar'
      }
      this.setState(state)
    

  }
  parar(){
    if(this.time !==null){
        clearInterval(this.time)
        this.time=null;
        }
        let state= this.state
        state.numero=0;
        state.botao='Iniciar'
        this.setState(state)
  }

  render(){
    return(
      <div className="container">
          <img src={require('./assets/cronometro.png')} className="img"/>
          <a className="time">{this.state.numero.toFixed(1)}</a>
            <div className="areaBtn">
              <a className="botao" onClick={this.iniciar}>{this.state.botao}</a>
              <a className="botao" onClick={this.parar}>Parar</a>
            </div>
          

      </div>
    );
  }
}

export default App;