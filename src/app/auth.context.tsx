import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {Hub} from "@aws-amplify/core";
import Auth from '@aws-amplify/auth';
import { disableExpoCliLogging } from "expo/build/logs/Logs";

type User = { signedin: boolean; username?: string; user?: {} };

export const AuthContext = React.createContext<{
  user: User;
}>({
  user: { signedin: false }
});

const AUTHENTICATOR_AUTHSTATE = "amplify-authenticator-authState";

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ signedin: false });
  const dologin = (signedInUser) => {
    console.log("Current user: ", signedInUser);
    disableExpoCliLogging();
    AsyncStorage.setItem(AUTHENTICATOR_AUTHSTATE, "signedIn");
    setUser({
      signedin: true,
      username: signedInUser.attributes.email,
      user: signedInUser
    });
  };
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        dologin(user);
      })
      .catch(err => 
        AsyncStorage.getItem(AUTHENTICATOR_AUTHSTATE))
       .then(
         cachedAuthState => cachedAuthState === "signedIn" && Auth.signOut()
       );
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload }) => {
      const { event, data } = payload;
      console.log(payload);
      if (event === "signOut") {
        setUser({ signedin: false, username:'', user:null });
        AsyncStorage.removeItem(AUTHENTICATOR_AUTHSTATE);
        return;
      }
      if (event === "signIn") {
        dologin(data);
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
