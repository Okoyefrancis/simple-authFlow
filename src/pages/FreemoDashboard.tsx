import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FreemoDashboard = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Sider>
            <Button>
              <NavLink to="/upgradefirstpage">Upgrade to Bromo</NavLink>
            </Button>
          </Sider>
          <Body></Body>
        </Wrap>
      </Container>
    </div>
  );
};

export default FreemoDashboard;

const Button = styled.div`
  height: 40px;
  width: 60%;
  border: 1px solid silver;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Body = styled.div`
  border: 1px solid silver;
  height: 700px;
  width: 50%;
`;
const Sider = styled.div`
  border: 1px solid silver;
  height: 700px;
  width: 20%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: green;
  height: 780px;
  width: 100%;
`;
