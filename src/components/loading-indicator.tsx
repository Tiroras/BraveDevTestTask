import React from 'react';
import styled, {keyframes} from 'styled-components';
import {colors} from '../themes/colors';

const lessMore = keyframes`
  from{
    transform: scale(0.5)
  }
  50%{
    transform: scale(1)
  }
  to{
    transform: scale(0.5)
  }
`;

const moreLess = keyframes`
  from{
    transform: scale(1)
  }
  50%{
    transform: scale(0.5)
  }
  to{
    transform: scale(1)
  }
`;

const Wrapper = styled.div`
  background: ${colors.darkGrey};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: ${colors.grey};
  border-radius: 50%;
  margin: 2px;
`;

const BasedCircle = styled(Circle)`
  animation: ${lessMore} 1s linear infinite;
`;

const SecondCircle = styled(Circle)`
  animation: ${moreLess} 1s linear infinite;
`;

export const LoadingIndicator = () => {
  return (
    <Wrapper>
      <BasedCircle />
      <SecondCircle />
      <BasedCircle />
    </Wrapper>
  );
};
