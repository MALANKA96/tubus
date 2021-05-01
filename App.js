import React from "react";
import {
  Animated,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  CheckBox,
  StyleSheet,
} from "react-native";

import Swipeable from "react-native-swipeable-row";
import styled from "styled-components/native";

export default function App() {
  const [task, setTask] = React.useState([
    { text: "asdsad", key: "1", isDone: true },
    { text: "758758", key: "2", isDone: false },
  ]);

  React.useEffect(() => {}, [task]);

  const [text, setText] = React.useState("");

  const pressDone = (key) => {
    setTask((prevTask) => {
      return [...prevTask];
    });
    task[key - 1].isDone
      ? (task[key - 1].isDone = false)
      : (task[key - 1].isDone = true);
  };
  const pressDelete = (key) => {
    setTask((prevTask) => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setText("");
      setTask((prevTask) => {
        return [
          ...prevTask,
          { text, key: (task.length + 1).toString(), isDone: false },
        ];
      });
    } else if (text.length == 0) {
      Alert.alert("Oops...", "Nothing to add, please write a task", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    } else {
      Alert.alert("Oops...", "Task must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

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
          <Swipeable
            leftButtons={[
              <TouchableOpacity onPress={() => pressDone(item.key)}>
                <TextButtonDone>done</TextButtonDone>
              </TouchableOpacity>,
            ]}
            rightButtons={[
              <TouchableOpacity>
                <TextButtonEdit>edit</TextButtonEdit>
              </TouchableOpacity>,
              <TouchableOpacity onPress={() => pressDelete(item.key)}>
                <TextButtonDelete>delete</TextButtonDelete>
              </TouchableOpacity>,
            ]}
          >
            <TextTasks props={item}> {item.text} </TextTasks>
          </Swipeable>
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
  background-color: #2c387e;
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
  height: 36px;
  line-height: 41px;
  margin-top: 5px;
  font-family: Roboto;
  font-size: 24px;
  color: #c7c4c1;
  background-color: #3f51b5;
  text-decoration: ${(props) => props.props.isDone && "line-through"};
`;
const TextButtonDelete = styled.Text`
  text-align: left;
  height: 36px;
  line-height: 41px;
  margin-top: 5px;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 24px;
  color: #c7c4c1;
  background-color: #ff1744;
`;
const TextButtonEdit = styled.Text`
  text-align: left;
  height: 36px;
  line-height: 41px;
  margin-top: 5px;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 24px;
  color: #c7c4c1;
  background-color: #b28704;
`;
const TextButtonDone = styled.Text`
  text-align: right;
  height: 36px;
  line-height: 41px;
  margin-top: 5px;
  padding-right: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 24px;
  color: #c7c4c1;
  background-color: #357a38;
`;
