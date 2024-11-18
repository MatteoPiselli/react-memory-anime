import React, { useState } from 'react';
import './style.css';

function cards(){
  return [
    {
      id: 1,
      image: 'https://fr.web.img6.acsta.net/pictures/20/12/28/10/24/5603983.jpg',
      state: 'close'
    },

    {
      id: 2,
      image: 'https://i.ibb.co/TtZdWMR/jujutsu-kaisen.webphttps://ibb.co/QNc1Vsc.webp',
      state: 'close'
    },

    {
      id: 3,
      image: 'https://i.ibb.co/4PSLvzv/naruto.jpg',
      state: 'close'
    },

    {
      id: 4,
      image: 'https://i.ibb.co/cDhJ4qv/kuroko-no-basket.webp',
      state: 'close'
    },

    {
      id: 5,
      image: 'https://i.ibb.co/HqJL3Qv/haikyuu.jpg',
      state: 'close'
    },

    {
      id: 6,
      image: 'https://i.ibb.co/PtSSp1M/black-clover.jpg',
      state: 'close'
    },

    {
      id: 7,
      image: 'https://i.ibb.co/vjjgWj5/goblin-slaye.jpg',
      state: 'close'
    },

    {
      id: 8,
      image: 'https://i.ibb.co/yyRbCLR/code-geass.webp',
      state: 'close'
    }
  ]
}

export default function App() {

  const handleClickReset = async (e) => {};
  const handleClickEnd = async (e) => {};
  const handleClickTurn = async (id) => {
    setItems(
      items.map((item) => {
        if (id == item.id) {
          return { ...item, state: item.state == 'open' ? 'close' : 'open'};
        }
        return item;
      })
    );
  };

  const [items, setItems] = React.useState(cards());

  return (
    <div
      style={{paddingTop: '20px'}}
    >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h1>Matchs the pairs 🤔</h1>
      <p>Deploy in progress... </p>  
    </div>
      <div 
        style={{
          borderStyle: 'solid', 
          borderWidth: '1px',  
          borderColor: '#000'
      }}>      
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <p
          style={{
            width: '300px',
            height: '60px',
            backgroundColor: 'grey',
            borderRadius: '5px',
          }}
        >Pairs matched
        <br />
        1/8</p>
        <p
          style={{
            width: '300px',
            height: '60px',
            backgroundColor: 'grey',
            borderRadius: '5px',
          }}
        >Total moves
        <br />
        2</p>
      </div>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          border: '1px solid black',
        }}
        >
          {items.map((item) => {
            if (item.state == 'close'){
              return (
                <img
                  key={item.id}
                  src="https://i.ibb.co/3zRvPs8/Dos-carte-pokemon.jpg"
                  style={{
                    width: '200px', 
                    height: '300px', 
                    margin: '10px',
                    border: '5px solid grey',
                    backgroundColor: 'grey',
                    borderRadius: '5px',
                    width: '300px'
                  }}
                  onClick={() => handleClickTurn(item.id)}
                />
              );
            }
            return (
              <div key={item.image}>
                <img
                  src={item.image}
                  style={{
                    width: '200px', 
                    height: '300px', 
                    margin: '10px'
                  }}
                  onClick={() => handleClickTurn(item.id)}
                />
              </div>
            );
          })}
      </div>
      <button
        style={{
          borderRadius: '10px',
          width: '60px',
          height: '50px',
          margin: '10px'
        }}
        onClick={() => handleClickReset()}
      >
        Reset Game
      </button>
      <button
        style={{
          borderRadius: '10px',
          width: '60px',
          heigh: '50px'
        }}
        onClick={() => handleClickEnd()}
      >
        End Game
      </button>
    </div>
  )

}