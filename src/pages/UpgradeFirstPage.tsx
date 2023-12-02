import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const UpgradeFirstPage = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <Bromo>
            <Hold2>
              <Text1>Bromo</Text1>
              <p>Team up with your colleagus around your APIs.</p>
              <Price>#2000</Price>

              <Button>
                <NavLink to="/register2">Get started</NavLink>
              </Button>
              <Text>
                Highlights of plan features:
                <br />
                Five staffs
                <br />
                15 projects
              </Text>
            </Hold2>
          </Bromo>
          <Premo>
            <Hold3>
              <Text1>Premo</Text1>
              <p>Team up with your colleagus around your APIs.</p>
              <Price>#5000</Price>

              <Button>
                <NavLink to="/register">Get started</NavLink>
              </Button>
              <Text>
                Highlights of plan features:
                <br />
                Unlimited staffs
                <br />
                Unlimited projects
              </Text>
            </Hold3>
          </Premo>
        </Wrap>
      </Container>
    </div>
  );
};

export default UpgradeFirstPage;

const Hold3 = styled.div``;

const Hold2 = styled.div``;

const Text = styled.div`
  font-size: 19px;
  padding-top: 10px;
`;

const Button = styled.div`
  background-color: darkorange;
  height: 40px;
  width: 90%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 40px;
`;

const Text1 = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Premo = styled.div`
  border: 1px solid silver;
  height: 350px;
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
  }
`;

const Bromo = styled.div`
  border: 1px solid silver;
  height: 350px;
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

const Container = styled.div`
  /* background-color: #4d003f; */
  height: 700px;
  width: 100%;
`;
