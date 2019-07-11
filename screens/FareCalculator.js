import React, { Component } from 'react'
import { View, StatusBar, Text as Texta, ScrollView } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import FontLoader from "../utils/fontLoader";
import { SocialIcon, Overlay, CheckBox as CheckBoxNew } from "react-native-elements";
import { AppLoading } from "expo";

import {
  Input,
  Button,
  ButtonProps,
  Text,
  Modal,
  Checkbox 
} from "react-native-ui-kitten";

import Colors from "../utils/colors";
import { gotoAnotherPage } from "../utils/universalFunctions";
export class FareCalculator extends Component {
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
        calculateText: ''
      };
    
      phoneChanged = value => {
          this.setState({
              phone: value
          })
      };
      onChange = ()=>{

      }
      onCheck = (checked) => {
        this.setState({ checked });
      };
    
    calculate = ()=>{

    }
    
      async componentDidMount() {
        var self = this;
        await FontLoader();
        this.setState({ fontLoaded: true });
      }
    render() {
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
                          Fare calculator
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
                        label="From"
                        value={this.state.from}
                        onChangeText={this.phoneChanged}
                      />
                      <Input
                        label="To"
                        value={this.state.email}
                        onChangeText={this.phoneChanged}
                      />

                      <Row>
                      <Text>Your fare is {this.state.calculateText}</Text>    
                      </Row>
                     
                     
         
         <Button onPress={this.calculate}>Calculate</Button>
                    </View>
                  </Row>
                    
                    </Grid>
            
    
                </ScrollView>
               
                </Container>
          
            )
    }
}

export default FareCalculator
