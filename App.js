import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [task, setTask] = React.useState([
    { text: "react", key: "1" },
    { text: "native", key: "2" },
    { text: "todo list app", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTask((prevTask) => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setText("");
      setTask((prevTask) => {
        return [{ text, key: Math.random().toString() }, ...prevTask];
      });
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  [text, setText] = React.useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <Container>
      <Header>
        <NameApp onPress={() => Alert.alert("application TODOlist")}>
          tubus
        </NameApp>
      </Header>
      <InputTodo>
        <TextInputTodo
          placeholder="write text task..."
          onChangeText={changeHandler}
          value={text}
        />
        <ButtonAddTodo onPress={() => submitHandler(text)}>
          <TextButton>ADD</TextButton>
        </ButtonAddTodo>
      </InputTodo>
      <Middle>
        <TitleTask>next task</TitleTask>
      </Middle>
      <FlatList
        data={task}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <TextTasks>{item.text}</TextTasks>
          </TouchableOpacity>
        )}
      />
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
const TextTasks = styled.Text`
  font-family: Roboto;
  font-size: 24px;
  color: #202020;
`;
