import styled from "styled-components";
import image from "../assets/image.png";
const StyledCard = {
  frame: styled.div`
    width: 280px;
    height: 280px;
    transition: transform 200ms;
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  `,

  card: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    transition-duration: 250ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
  `,

  light: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 9px;
  `,
};

export default StyledCard;
