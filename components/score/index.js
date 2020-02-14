import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components/native';

import { points as pointsSelector } from './selectors';

function Score() {
  const points = useSelector(pointsSelector);
  return <StyledText>points: {points}</StyledText>
}

const StyledText = styled.Text`
  color: palevioletred;
`;

export default Score;
