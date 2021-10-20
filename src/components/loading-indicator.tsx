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
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 50px;

  .first, .third{
    animation: ${lessMore} 1s linear infinite;
  }

  .second{
    animation: ${moreLess} 1s linear infinite;
  }
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: ${colors.grey};
  border-radius: 50%;
  margin: 2px;
`;

export const LoadingIndicator = () => {
  return (
    <Wrapper>
      <Circle className='first' />
      <Circle className='second' />
      <Circle className='third' />
    </Wrapper>
  );
};
