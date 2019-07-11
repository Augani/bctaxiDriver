import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, StatusBar, View} from 'react-native'
import Expo, {AppLoading, Font} from "expo";
import { SocialIcon, Button } from 'react-native-elements'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
      }
    
      async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
    
  render() {
    if (this.state.loading) {
        return <AppLoading />;
      }
    return (
        
      <Container>
          <StatusBar hidden />
        
        <Grid>
         <Row></Row>
         <Row>
             <Grid>
                 <Row>
                     <View flex={1} style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                     <SocialIcon
                    title='Sign In With Facebook'
                    button
                    style={{width: '90%', margin: 10}}
                    type='facebook'
                    />
                   
                     </View>
                     
                    </Row>
                 <Row>
                 <View flex={1} style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    
                    <Button
                    title="Continue with mobile"
                    style={{width: '90%', margin: 10}}
                    type="outline"
                    />
                    
                     </View>
                 </Row>
                
             </Grid>
         </Row>
         <Row></Row>
        </Grid>
      </Container>
    );
  }
}