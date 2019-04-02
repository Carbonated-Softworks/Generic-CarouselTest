import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo-publicis-sapeint.png';
import Card from './Card';
import data from './data/data' //simple format table


// class component
class App extends Component {

  constructor(c_watches){
    super(c_watches);
    this.state = {
      watches: data.watches,
      watch: data.watches[0] //defining single unit of selector
    }
  }
  

//card selection logic below, based on assigning a card an integer, starting at 1 
}

  nextWatch = () => {
    const newIndex = this.state.watch.index+1;
    this.setState({
      watch: data.watches[newIndex] //sets state of data.watches to NewIndex, as calculated by this.state.watch.index+1
    })
  }

  prevWatch = () => {
    const newIndex = this.state.watch.index-1;
    this.setState({
      watch: data.watches[newIndex] //sets state of data.watches to NewIndex, as calculated by this.state.watch.index-1
    })
  }

//keyboard accessibility 

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            this.prevWatch;
            break;
        case 39:
            this.nextWatch;
            break;
    }
};

//react code below
//button states seperated

  render() {
    const {watches, watch} = this.state;
    return (
      <div className="App">

{/*Page Structure*/}

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Publicis Sapient.</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${watch.index}`}>

                {/*translating and mapping the location of cards in percentage scale for multi-screensize use*/}

                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${watch.index*(100/watches.length)}%)` 
                }}>
                  {
                    watches.map(watch => <Card key={watch._id} watch={watch} />)
                  }
                </div>
              </div>
            </div>

{/*Buttons at bottom of page, as I don't think overlaying them over the content as the suggestion is a good design practice*/}

            <section>
              
              <button>
                <img src="./assets/arrow.svg" 
                  alt="Next" 
                  onClick={() => this.nextWatch()} 
                  disabled={watch.index === data.watches.length-1} />
              </button>
              <button>
                <img src="./assets/arrow.svg" 
                  alt="Prev" 
                  onClick={() => this.prevWatch()} 
                  disabled={watch.index === 0} />
              </button>
            <section/>


        </div>
      </div>
    );
}

export default App;
