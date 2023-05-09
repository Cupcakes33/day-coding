import { Link } from "react-router-dom";
import styled from "styled-components";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Link to="/home">Home</Link>
      <Link to="/view">View</Link>
    </ToolbarContainer>
  );
};

export default Toolbar;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
`;
