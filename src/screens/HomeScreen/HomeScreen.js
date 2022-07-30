import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { auth, db } from '../../firebase/config';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

export default function HomeScreen(props) {
  const q = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'));

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTask = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'tasks'), {
      task: input,
      timestamp: serverTimestamp(),
    });
    setInput('');
  };

  const renderTask = ({ item, id, index, task }) => {
    // console.log(`Item ${item}, Index ${index}`);
    console.log('Item ', item, index);
    return (
      <View style={styles.taskContainer}>
        <Text style={styles.taskText} id={item.id}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setTasks(text)}
          value={input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {tasks && (
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => index}
            // removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}
