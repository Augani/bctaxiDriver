import React, { Component } from 'react'
import { View, StatusBar, Text as Texta, ScrollView, AsyncStorage } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import FontLoader from "../utils/fontLoader";
import { SocialIcon, Overlay, CheckBox as CheckBoxNew } from "react-native-elements";
import { AppLoading } from "expo";
import AwesomeAlert from 'react-native-awesome-alerts';


import {
  Input,
  Button,
  ButtonProps,
  Text,
  Modal,
  Checkbox 
} from "react-native-ui-kitten";

import Colors from "../utils/colors";
import { gotoAnotherPage, makePostRequest } from "../utils/universalFunctions";
export class CarDetails extends Component {
    static navigationOptions = {
        header: null
      };
    
      state = {
        fontLoaded: false,
        phone: "",
        code: "",
        visible: false,
        checked: false,
        fullName: '',
        email: '',
        Password: '',
        Confirm: '',
        alertTitle: '',
        alertContent: '',
        showAlert: false
      };
    
      phoneChanged = value => {
          this.setState({
              phone: value
          })
      };
      emailChanged = value => {
        this.setState({
            email: value
        })
    };
    nameChanged = value => {
      this.setState({
          fullName: value
      })
  };
  passChanged = value => {
    this.setState({
        Password: value
    })
};
showAlert = () => {
  this.setState({
    showAlert: true
  });
};

hideAlert = () => {
  this.setState({
    showAlert: false
  });
};
conChanged = value => {
  this.setState({
      Confirm: value
  })
};


textChanged = (text, sta)=>{
    this.setState({
        sta: text
    });
};

_retrieveData = async () => {
  var self = this;
  try {
    const value = await AsyncStorage.getItem('number');
    if (value !== null) {
      self.setState({
        phone: value
      })
    }
  } catch (error) {
    // Error retrieving data
  }
};
      onChange = ()=>{

      }
      onCheck = (checked) => {
        this.setState({ checked });
      };
    
    
      sendCode = () => {
this.CarDetails();
      //  gotoAnotherPage('Home', this.props,{phone: this.state.phone})
      };

      CarDetails = ()=>{
        var self = this;
        const  {fullName, email, Password, Confirm, phone} = this.state;
        if(!fullName || !email || !Password || !Confirm){
          self.setState({
              alertTitle: "Error",
              alertContent: "Please fill all fields",
              showAlert: true
          })
          return;
        }
        var data = {
          username: fullName,
          email: email,
          userType: 1,
          phone: phone
        }
        makePostRequest('https://ridebookingserver.herokuapp.com/api/user/CarDetails', data).then(r=>{
          if(r.data.code == 200){
            gotoAnotherPage('Home', self.props)

          }
        }).catch(e=>{

        })
      }
    
      async componentDidMount() {
        var self = this;
        await FontLoader();
        this.setState({ fontLoaded: true });
        this._retrieveData();
      }
    render() {
      const {showAlert, alertTitle, alertContent} = this.state;
      if(!this.state.fontLoaded){
        return <AppLoading />
      }
        return (
            <Container>
            <StatusBar hidden />
            <ScrollView flex={1}>
              <Header transparent />
            <Grid>
              <Row size={1}>
                <View
                  flex={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                  }}
                >
                  {this.state.fontLoaded ? (
                    <Text
                      category="h1"
                      style={{
                        fontFamily: "Normal-text-open",
                        color: Colors.primary
                      }}
                    >
                      Car Details
                    </Text>
                  ) : null}
                </View>
              </Row>
            
               <Row size={4}>
                <View
                  flex={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                    <Input
                    label="Car Make"
                    value={this.state.carmake}
                    onChangeText={e=>this.textChanged(e, "carMake")}
                  />
                  <Input
                    label="Car Make"
                    value={this.state.carModel}
                    onChangeText={e=>this.textChanged(e, "carModel")}
                  />
                   <Input
                    label="Car Year"
                    value={this.state.carYear}
                    onChangeText={e=>this.textChanged(e, "carYear")}
                  />
                  <Input
                    label="Car Color"
                    value={this.state.carColor}
                    onChangeText={e=>this.textChanged(e, "carColor")}
                  />
                  <Input
                    label="Number of Seats"
                    value={this.state.numberOfSeats}
                    onChangeText={e=>this.textChanged(e, "numberOfSeats")}
                  />
                 
                  <Text category="label" status="info" style={{textAlign: 'center'}}>Terms and conditions</Text>
                  {/* <Checkbox
                  checked={this.state.checked}
                  status="success"
        onChange={this.onCheck} */}
      <CheckBoxNew
      style={{textAlign: 'center', alignSelf: 'center',}}
  title='I have read and accepted all terms and conditions'
  onPress={() => this.setState({checked: !this.state.checked})}
  checked={this.state.checked}
/>
      {this.state.checked?  <Button onPress={this.sendCode}>Confirm</Button>:  <Button  onPress={this.sendCode}>Cancel</Button>}
                </View>
              </Row>
                
                </Grid>
        

            </ScrollView>
            <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={alertTitle}
          message={alertContent}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Ohk"
          confirmButtonColor={Colors.primary}
          onConfirmPressed={()=>this.hideAlert()}
        />
           
            </Container>
      
        )
    }
}

export default CarDetails
