/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {titleMimi: "", footerMimi: ''}

    this.writeMimimi = this.writeMimimi.bind(this);
  }

  changeToMimimi(mimimi){
    let newText = mimimi.toLowerCase();

    return newText.replace(/(a|e|i|o|u|á|á|á|á|ú|ã|õ|à|è|ì|â|ô)/g, 'i');
    
}
  
    writeMimimi(w){
      let s = this.state;
      s.titleMimi = w;
      s.footerMimi = this.changeToMimimi(w);
      this.setState(s);
    }
  
  render() {
    return (
     <View style={styles.body}>
       <View>
          <Text style={styles.title}>Create Mimimi</Text>    
       </View>
       <View style={styles.inputArea}>
         <TextInput style={styles.input}  onChangeText={this.writeMimimi} placeholder="Write something..."/>    
       </View>

       <View style={styles.area}>
         <Text style={[styles.title_all, styles.title_mimimi]}>
           {this.state.titleMimi.toUpperCase()}
         </Text>    
         <Image style={styles.image_mimimi} 
            source={{uri:'https://conteudo.imguol.com.br/c/noticias/53/2016/08/29/bebe-chorando-choro-mimimi-1472504477218_956x500.jpg'}} />
          <Text style={[styles.title_all, styles.footer_mimimi]}>
            {this.state.footerMimi.toUpperCase()}
          </Text>    
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#999',
    paddingTop:30,
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    color:'#FFF'
  }, 
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    borderWidth:1,
    borderColor: '#999',
    backgroundColor: '#EEE',
    color:'#000',
    height:40,
    margin:20,
    padding:10
  },
  image_mimimi:{
    height:400,
    width:400,
    marginTop:-90,
    zIndex:0
  },
  title_all:{
  fontSize:30,
    color:'#FFF',
    padding:10,
    backgroundColor: 'transparent',
    fontWeight:'bold',
    textAlign:'left',
    marginLeft:10,
    height:70
  },
  title_mimimi:{
    marginTop:20,
    zIndex:1
    
  },
  footer_mimimi:{
    marginTop:-60,
    zIndex:1
  }

  
});
