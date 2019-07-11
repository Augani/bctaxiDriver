import React from 'react';
import {
  mapping,
  theme,
} from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import Login from './components/login'

export default class App extends React.Component {

   render() {
     return (
       <ApplicationProvider
         mapping={mapping}
         theme={theme}>
         <Login/>
       </ApplicationProvider>
     );
   }
}