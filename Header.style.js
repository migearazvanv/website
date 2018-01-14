import styled, {css} from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.29em 1em;
  margin: 0 4em;
  background: transparent;
  color: palevioletred;
  border: 2px solid #ffffff;

  ${props => props.primary && css`
    background: #F8F8FF;
    color: white;
  `}
`;
