import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice,roleDice}) => {

    
    
  return (
  <DiceContainer>
    <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
    </div>
    <p style={{fontSize: 24}}>Click on dice to roll</p>
  </DiceContainer>);
};

export default RoleDice

const DiceContainer=styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    .dice{
        cursor: pointer;
    }
`;