import { useState } from "react";
import { ICardStyle, ILightStyle } from "./types/cardType";
import StyledCard from "./styles/StyledCard";

function App() {
  const [cardStyle, setCardStyle] = useState<ICardStyle>({
    boxShadow: "",
    transform: "",
  });

  const [lightStyle, setLightStyle] = useState<ILightStyle>({
    backgroundImage: "",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const frame = e.currentTarget.getBoundingClientRect();
    const left = e.clientX - frame.x;
    const top = e.clientY - frame.y;
    const centerX = left - frame.width / 2;
    const centerY = top - frame.height / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    setCardStyle({
      boxShadow: `${-centerX / 10}px ${
        -centerY / 10
      }px 10px rgba(0, 0, 0, 0.1)`,
      transform: `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${
        d / 10
      }deg)`,
    });

    setLightStyle({
      backgroundImage: `radial-gradient(circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70)`,
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({ boxShadow: "", transform: "" });
    setLightStyle({ backgroundImage: "" });
  };

  return (
    <StyledCard.frame
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCard.card style={cardStyle}>
        <StyledCard.light style={lightStyle} />
      </StyledCard.card>
    </StyledCard.frame>
  );
}

export default App;
