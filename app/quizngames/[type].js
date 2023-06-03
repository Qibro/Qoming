import {
  Alert,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { Audio } from 'expo-av';
import { Colors, GlobalStyle } from '../../constant';
import { questions } from './questions';
import { quizAudio } from '../../assets/audio';

const quiz = () => {
  const router = useRouter();
  const { type } = useSearchParams();
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState(questions[type][number]);
  const [point, setPoint] = useState(0);
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState();
  const [audio, setAudio] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(quizAudio);
    setAudio(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    audio?.unloadAsync();
  };

  useEffect(
    () => (audio ? () => audio?.unloadAsync()
      : undefined),
    [audio],
  );

  useEffect(() => {
    if (number === questions[type].length) router.replace({ pathname: '/quizngames/result', params: { point } });
    else setQuestion(questions[type][number]);
  }, [number]);

  const onPress = (answer) => {
    setSelected(answer);
    if (answer === question.answer) {
      setPoint(point + 10);
    }
    setActive(false);
  };

  const onNext = () => {
    if (selected) {
      setNumber(number + 1);
      setActive(true);
      setSelected();
    } else {
      Alert.alert('Harap pilih jawaban terlebih dahulu!');
    }
  };

  const getColor = (index) => {
    if (selected === index) {
      if (selected === question.answer) return Colors.correct;
      return Colors.wrong;
    }
    return Colors.pink;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number + 1}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question?.question}</Text>
      </View>
      {question?.options.map((x, i) => (
        <TouchableOpacity style={[styles.answerContainer(getColor(i))]} key={x} onPress={() => onPress(i)} disabled={!active}>
          <Text style={styles.answer}>{x}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.row}>
        <Text style={styles.point}>Point: <Text style={styles.bold}>{point}</Text></Text>
        <TouchableOpacity style={styles.nextContainer} onPress={onNext}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.back()}>
        <Text style={styles.next}>EXIT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={playSound}>
        <Text style={styles.next}>SOUND: ON</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={stopSound}>
        <Text style={styles.next}>SOUND: OFF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    textAlign: 'center',
  },
  questionContainer: {
    ...GlobalStyle.shadow(3),
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: Colors.white,
    marginVertical: 8,
    borderRadius: 2,
    marginHorizontal: 16,
  },
  question: {
    textAlign: 'center',
  },
  answerContainer: (color) => ({
    backgroundColor: color,
    padding: 12,
    marginVertical: 2,
    marginHorizontal: 8,
    borderRadius: 4,
  }),
  answer: {
    textAlign: 'center',
    color: Colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  point: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  nextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.black,
    borderRadius: 4,
    marginRight: 16,

  },
  next: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 16,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.black,
    borderRadius: 4,
    marginVertical: 2,
    marginHorizontal: 4,
  },
});
