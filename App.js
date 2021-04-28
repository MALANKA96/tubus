import React, { useRef } from "react";
import { Animated, Text, View, Button } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 2 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 1 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container>
      <Animated.View style={{ opacity: fadeAnim }}>
        <GroupTitle> tubus </GroupTitle>
      </Animated.View>
      <Button title="Fade_In" onPress={fadeIn} />
      <Button title="FadeOuT-" onPress={fadeOut} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0a4f0a;
`;

const GroupTitle = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
`;
