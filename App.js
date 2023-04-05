import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet,Image, View, Pressable,Text,ScrollView} from 'react-native';

const Happy = 'https://open.spotify.com/playlist/1BLHmkhxolaXOxJaVVJpNv?si=465041f26c7248b5';
const Energetic  = 'https://open.spotify.com/playlist/5JkfuhJ1DmQbS5pUDbfJjh?si=cbb0af5f5d714840';
const Chill = 'https://open.spotify.com/playlist/1ttX2Hc57TXjwIUpBYe0U5?si=9ead0304c9414acb';
const Relaxing = 'https://open.spotify.com/playlist/4vEYVjEB5dTsIDxdQjPBqL?si=94d2a87477484c0b';
const Romantic = 'https://open.spotify.com/playlist/2jczziXw4GeLwwD2aouN1o?si=f4706c10fa2b4e2c';
const Sad = 'https://open.spotify.com/playlist/1nfA3VJADiihz733P29K3O?si=528eaaa18aed4a6a';
const Nostalgic = 'https://open.spotify.com/playlist/1Dli7jZa9M8ThsVv6p1C1v?si=3c1f6a5d39ee48d2';
const Angry = 'https://open.spotify.com/playlist/08NKNFVZip5AO8Lb5UCs71?si=b1e65756ef3b48b9';
const Hopeful = 'https://open.spotify.com/playlist/10mpTYxPQ0E95EsUm0Lgoc?si=9f22aa30d8224a77';
const Reflective = 'https://open.spotify.com/playlist/1WMnqxRI2CYej5zp9km99O?si=544409c532c04060';
const Confused = 'https://open.spotify.com/playlist/2T2RMYhGB1cGGSFW4c7HbR?si=0542fe45267f4bcb';
const Meloncholic = 'https://open.spotify.com/playlist/3ELyNAqio7hkbZ4zFq12in?si=d26f7d54d0664d5e';
const Anxious = 'https://open.spotify.com/playlist/3ShpJHvMPwO0bKBDmVpEXs?si=1589bb0ca8ae4b09';
const Excited = 'https://open.spotify.com/playlist/4EYfi4HpKLpNkSkMkBllWF?si=1fa57df854f6456d';
const Fearful = 'https://open.spotify.com/playlist/3FsbtKc9cg3SFr6esMrtox?si=76b627f1c0c34f5a';
const Numb = 'https://open.spotify.com/playlist/1qK0mo3eSKzKWgumGkdi28?si=f0f61d85206c492e';
const Frustrated = 'https://open.spotify.com/playlist/21dn6moZVWSBU2D7RCwYm7?si=eaeb904163744931';
const Jealous = 'https://open.spotify.com/playlist/6DmpcXE7PxhMOI51wYxI82?si=0416c54a312b4aa5';
const Amused = 'https://open.spotify.com/playlist/7fv9Z7ONVW67zV50jVcA4O?si=109fd2dda9a64aa1';
const Content = 'https://open.spotify.com/playlist/5azFs7yDkSpK7YUyvJN8RB?si=40e6fbf2b5f044ba';

function openLink1(){

  Linking.openURL('https://open.spotify.com/playlist/1BLHmkhxolaXOxJaVVJpNv?si=465041f26c7248b5')
}
function openLink2(){

  Linking.openURL('https://open.spotify.com/playlist/5JkfuhJ1DmQbS5pUDbfJjh?si=cbb0af5f5d714840')
}
function openLink3(){

  Linking.openURL('https://open.spotify.com/playlist/1ttX2Hc57TXjwIUpBYe0U5?si=9ead0304c9414acb')
}
function openLink4(){

  Linking.openURL('https://open.spotify.com/playlist/4vEYVjEB5dTsIDxdQjPBqL?si=94d2a87477484c0b')
}
function openLink5(){

  Linking.openURL('https://open.spotify.com/playlist/2jczziXw4GeLwwD2aouN1o?si=f4706c10fa2b4e2c')
}
function openLink6(){

  Linking.openURL('https://open.spotify.com/playlist/1nfA3VJADiihz733P29K3O?si=528eaaa18aed4a6a')
}
function openLink7(){

  Linking.openURL('https://open.spotify.com/playlist/1Dli7jZa9M8ThsVv6p1C1v?si=3c1f6a5d39ee48d2')
}
function openLink8(){

  Linking.openURL('https://open.spotify.com/playlist/08NKNFVZip5AO8Lb5UCs71?si=b1e65756ef3b48b9')
}
function openLink9(){

  Linking.openURL('https://open.spotify.com/playlist/10mpTYxPQ0E95EsUm0Lgoc?si=9f22aa30d8224a77')
}
function openLink10(){

  Linking.openURL('https://open.spotify.com/playlist/1WMnqxRI2CYej5zp9km99O?si=544409c532c04060')
}
function openLink11(){

  Linking.openURL('https://open.spotify.com/playlist/2T2RMYhGB1cGGSFW4c7HbR?si=0542fe45267f4bcb')
}
function openLink12(){

  Linking.openURL('https://open.spotify.com/playlist/3ELyNAqio7hkbZ4zFq12in?si=d26f7d54d0664d5e')
}
function openLink13(){

  Linking.openURL('https://open.spotify.com/playlist/3ShpJHvMPwO0bKBDmVpEXs?si=1589bb0ca8ae4b09')
}
function openLink14(){

  Linking.openURL('https://open.spotify.com/playlist/4EYfi4HpKLpNkSkMkBllWF?si=1fa57df854f6456d')
}
function openLink15(){

  Linking.openURL('https://open.spotify.com/playlist/3FsbtKc9cg3SFr6esMrtox?si=76b627f1c0c34f5a')
}
function openLink16(){

  Linking.openURL('https://open.spotify.com/playlist/1qK0mo3eSKzKWgumGkdi28?si=f0f61d85206c492e')
}
function openLink17(){

  Linking.openURL('https://open.spotify.com/playlist/21dn6moZVWSBU2D7RCwYm7?si=eaeb904163744931')
}
function openLink18(){

  Linking.openURL('https://open.spotify.com/playlist/6DmpcXE7PxhMOI51wYxI82?si=0416c54a312b4aa5')
}
function openLink19(){

  Linking.openURL('https://open.spotify.com/playlist/7fv9Z7ONVW67zV50jVcA4O?si=109fd2dda9a64aa1')
}
function openLink20(){

  Linking.openURL('https://open.spotify.com/playlist/5azFs7yDkSpK7YUyvJN8RB?si=40e6fbf2b5f044ba')
}
function openLink21(){

  Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return(
<ScrollView>
<View>
<View style={styles.button}>
  <Image style={styles.Img} source={require("./assets/InAppLogo.png")}></Image>
</View>
<View style ={styles.button}><Text style ={styles.Textaroo}>Choose your Emotion</Text></View>
<View style = {styles.button}>
<Pressable style = {styles.color1} onPress={openLink1}><Text style ={styles.Boop}>Happy</Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color2}onPress={openLink2}><Text style ={styles.Boop}>Energetic </Text></Pressable>
</View>


<View style = {styles.button}>
<Pressable style = {styles.color3} onPress={openLink3}><Text style ={styles.Boop}>Chill </Text></Pressable>
</View>


<View style = {styles.button}>
<Pressable style = {styles.color4}onPress={openLink4}><Text style ={styles.Boop}>Relaxing </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color5}onPress={openLink5}><Text style ={styles.Boop}>Romantic </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color6}onPress={openLink6}><Text style ={styles.Boop}>Sad </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color7}onPress={openLink7}><Text style ={styles.Boop}>Nostalgic </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color8}onPress={openLink8}><Text style ={styles.Boop}>Angry </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color9}onPress={openLink9}><Text style ={styles.Boop}>Hopeful </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color10}onPress={openLink10}><Text style ={styles.Boop}>Reflective </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color11}onPress={openLink11}><Text style ={styles.Boop}>Confused </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color12}onPress={openLink12}><Text style ={styles.Boop}>Meloncholic </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color13}onPress={openLink13}><Text style ={styles.Boop}>Anxious </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color14}onPress={openLink14}><Text style ={styles.Boop}>Excited </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color15}onPress={openLink15}><Text style ={styles.Boop}>Fearful</Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color16}onPress={openLink16}><Text style ={styles.Boop}>Numb</Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color17}onPress={openLink17}><Text style ={styles.Boop}>Frustrated </Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color18}onPress={openLink18}><Text style ={styles.Boop}>Jealous</Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color19}onPress={openLink19}><Text style ={styles.Boop}>amused</Text></Pressable>
</View>

<View style = {styles.button}>
<Pressable style = {styles.color20}onPress={openLink20}><Text style ={styles.Boop}>content</Text></Pressable>
</View>

</View>
<View><Pressable style={styles.color21}onPress={openLink21}><Text>https://www.youtube.com/watch?v=dQw4w9WgXcQ</Text></Pressable></View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {

   backgroundColor:'#8355D8',
  

  },
  Boop: {
    
    marginTop:50,
    fontSize: 37,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign:'center'
  },
  Textaroo:{
    textAlign:'center',
    display:"inline",
 
    width:350,
    fontWeight: 'bold',
    marginLeft:10,
    flex:1,
    fontSize: 50,
    backgroundColor:'#8355D8'
  },
  Img:{
    backgroundColor:'#8355D8',
    marginTop:100,
    height:250,
  width:375,},
  color1:{ borderRadius: 40,
    textAlign:'center',
    display:"inline",
    height:150,
    width:350,
    margin:10,
    marginLeft:10,
    flex:1,
    backgroundColor:'#F8C8DC'
 },
 color2:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  flex:1,
  backgroundColor:'#8aecff'
},
color3:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#A22E2E'
},
color4:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#002366'
},
color5:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#63000A'
},
color6:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#922258'
},
color7:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#FFD27A'
},
color8:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#FF0000'
},
color9:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#ffb7c5'
},
color10:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#757270'
},
color11:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#C8AD90'
},
color12:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#00A86B'
},
color13:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#a18c75'
},
color14:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#c8a2c8'
},
color15:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#F0DC82'
},
color16:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#DAA06D'
},
color17:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#C2B280'
},
color18:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#617636'
},
color19:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#f0e130'
},
color20:{ borderRadius: 40,
  textAlign:'center',
  display:"inline",
  height:150,
  width:350,
  margin:10,
  marginLeft:10,
  
  backgroundColor:'#56b2f5'
},
color21:{ 
  textAlign:'center',
  display:"inline",
  height:20,
  width:3210,
  margin:10,
  marginLeft:10,
  
 
},
});

export default App;