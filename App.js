import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Header>
        <NameApp onPress={() => Alert.alert("application TODOlist")}>
          tubus
        </NameApp>
      </Header>
      <InputTodo>
        <TextInputTodo placeholder="write text task..." />
        <ButtonAddTodo>
          <TextButton onPress={() => Alert.alert("add task")}>ADD</TextButton>
        </ButtonAddTodo>
      </InputTodo>
      <Middle>
        <TitleTask>next task</TitleTask>
      </Middle>
    </Container>
  );
}

const Container = styled.View`
  margin-top: 24px;
  flex: 1;
  background-color: #c7c4c1;
`;
const Header = styled.View`
  background-color: #3f51b5;
`;

const NameApp = styled.Text`
  text-align: left;
  font-family: Roboto;
  font-size: 50px;
  font-weight: 800;
  color: #c7c4c1;
`;
const InputTodo = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: center;
`;

const TextInputTodo = styled.TextInput`
  width: 85%;
  font-family: Roboto;
  font-size: 24px;
  background-color: #c7c4c1;
  border: 2px #3f51b5;
`;

const TextButton = styled.Text`
  color: #c7c4c1;
  font-family: Roboto;
  font-size: 24px;
  text-align: center;
`;
const ButtonAddTodo = styled.TouchableOpacity`
  width: 15%;
  background-color: #3f51b5;
`;

const Middle = styled.View`
  margin-top: 5px;
  background-color: #3f51b5;
`;

const TitleTask = styled.Text`
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  color: #c7c4c1;
`;
