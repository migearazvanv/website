import styled, {css} from 'styled-components';

export const Image = styled('img')`
	float:left;
`;

/*export const VavaImage = styled.div`
	height:10vh;
	background-image: url('${require('../Home/vava-munte.jpg')}');
`;*/
export const ToolbarImage = styled.div`
	height:10vh;
	background-image: url('${require('../Home/toolbar.jpg')}');
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;