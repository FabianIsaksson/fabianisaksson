import styled from 'styled-components/macro';

export const ProTip = styled.div`
  margin-top: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: '14px';
  color: #999;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const AnimationButtonControl = styled.button`
  height: 40px;
  min-width: 120px;
  padding: 8px 12px;
  background: rgba(55, 55, 55, 0.9);
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  color: white;
  font-family: 'Roboto', sans-serif;

  & + & {
    margin-left: 16px;
  }
  &:focus {
    outline: none;
  }

  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.9);
  }
`;
