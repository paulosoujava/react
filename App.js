import React, { Component } from 'react';
import { View, StyleSheet,Platform, ImageBackground, Text, Button,Image } from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {consumido:0, status:'Ruim', pct:0, foto:'https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png'};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    
  }

  atualizar() {
    let s = this.state;
    s.pct = Math.floor((s.consumido/2000)*100);

    if(s.pct >= 100) {
      s.status = "Bom";
    } else {
      s.status = "Ruim";
    }
    if(s.pct >= 50 && s.pct <= 99 ) {
    
        s.foto = 'https://pt.seaicons.com/wp-content/uploads/2016/04/Smiley-scared-icon.png';
    }  
      if(s.pct == 100 ) {
    
        s.foto = 'https://vignette.wikia.nocookie.net/robocraft/images/2/26/Smile.png/revision/latest?cb=20150110152445';
    }

    this.setState(s);
  }

  addCopo() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./image/waterbg.png')} style={styles.bgimage}>

            <View style={styles.infoArea}>
             
            
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
               </View>
                <Image
               style={{width: 50, height: 50, marginRight:5}}
                source={{uri: this.state.foto} }
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>
              <Button title="Beber 200ml" onPress={this.addCopo} 
              color={Platform.OS === 'ios' ? color="#FFF" : null }/>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1
  },
  bgimage:{
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    paddingTop:45,

  },
  area:{
    flex:1,
    alignItems:'center'
  },
  areaTitulo:{
    color:'#45b2fc'
  },
  areaDado:{
    color:'#2b4274',
    fontSize:15,
    fontWeight:'bold'
  },
  content:{
  flex:2,
  backgroundColor:'transparent',
  alignItems:'center'
  },
  pctText:{
    fontSize:70,
    marginTop:90,
    color:'#FFFFFF',
    backgroundColor:'transparent'
  },
  btn:{
    color: Platform.OS === 'ios' ? color="#FFF" : color="#eee" 
  }
});















