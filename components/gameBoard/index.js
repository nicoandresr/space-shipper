import { useDispatch } from 'react-redux';
import React from 'react';
import styled from 'styled-components/native';
import Svg, { Circle } from 'react-native-svg';

import { addSinglePoint } from '../score/actions';
import Score from '../score';

export default function GameBoard() {
  const dispatch = useDispatch();
  const pressHandler = () => dispatch(addSinglePoint());
  return (
    <StyledView>
      <StyledSvg viebox="0 0 100 100">
        <Circle 
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />

      </StyledSvg>

      <StyledText>Open up App.js to start working on your app!</StyledText>

      <Score />

      <StyledButton title="Add point" onPress={pressHandler}/>
    </StyledView>
  );
}

const StyledButton = styled.Button`
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const StyledSvg = styled(Svg)`
  height: 100px;
  width: 100px;
`;

const StyledView = styled.View`
  background-color: black;
  height: 100%;
  justify-content: flex-start;
`;
