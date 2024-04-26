import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const FadeAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn(); // Fade in initially when component mounts
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        <Text style={{ fontSize: 24 , marginVertical: 10}}>Hello, React Native!</Text>
      </Animated.View>
      <Button title="Fade Out" onPress={fadeOut} />
    
     <View style={{ fontSize: 24, marginVertical: 10 }}>
        <Button title="Fade In" onPress={fadeIn} />
      </View>
      </View>
  );
};

export default FadeAnimation;
