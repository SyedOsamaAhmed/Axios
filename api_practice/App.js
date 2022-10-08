import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View, Pressable} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');

  const baseURL = 'https://jsonplaceholder.typicode.com';


 
  useEffect(() => {
   async function getData() {
    try{

      const response= await axios.get('${baseURL}/todos')
       response.data ? setData(response.data) :console.log('failure!')
    }catch{
      (err)=>{
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

        }else{
          console.log(`Error:${err.message}`)
        }
      }
    }
      

   
    }


    getData();
  }, []);

  return (
    <View style={styles.appContainer}>
      <Text>Axios Tutorial</Text>

      <View style={styles.btncontainer}>
        <Pressable style={styles.button} onPress={data?(data)=>console.log(data):console.log('No data!')}>
          <Text style={styles.text}>Get</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Post</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Update</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(50, 168, 82)',
  },

  button: {
    width: '35%',
    backgroundColor: '#728577',
    borderWidth: 1,
    marginHorizontal: 3,
    marginVertical: 3,
  },

  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  text: {
    color: '#fff',
    alignSelf: 'center',
  },

  data: {
    backgroundColor:'rgb(235, 64, 52)',
    justifyContent: 'center',
    backgroundColor: 'rgb(247, 240, 240)',
    alignItems: 'center',
  },
});

export default App;
