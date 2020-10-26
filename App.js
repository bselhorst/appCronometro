/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      btn: 'Iniciar',
      ultimo: null,
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    if(this.timer != null){
      //Aqui vai para o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn: 'Iniciar'}); 
    }else{
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({btn: 'Parar'});
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
    }
    this.setState({
      numero: 0,
      btn: 'Iniciar',
      ultimo: this.state.numero,
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.btn}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Último tempo: '+ this.state.ultimo.toFixed(2) + 's' : ''}
          </Text> 
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer:{
    marginTop: -150,
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9     
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltimo:{
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  }
});

export default App;
