import React, { useState, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn4Screen as SignIn } from "../scenes/auth/sign-in-4.component";
import { SignUp4Screen as SignUp } from "../scenes/auth/sign-up-4.component";
import { ForgotPasswordScreen } from "../scenes/auth/forgot-password.component";
import { HomeNavigator } from "./home.navigator";
import { AuthContext } from "../app/auth.context";

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => {
  const { user } = useContext(AuthContext);

  //initialRouteName={user!==null ? 'App' : 'SignIn'}
  return (
    <>
      {!user.signedin ? (
        <Stack.Navigator
          screenOptions={{ gestureEnabled: false }}
          headerMode="none"
          initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      ) : (
        <HomeNavigator />
      )}
    </>
  );
};
