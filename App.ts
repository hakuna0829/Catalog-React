import App from './src/app/app.component';
import awsconfig from './aws-exports';
import Amplify from '@aws-amplify/core';
import { YellowBox } from 'react-native';

Amplify.configure(awsconfig);

YellowBox.ignoreWarnings(['Require cycle']);

export default App;
