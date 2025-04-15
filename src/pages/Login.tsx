import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react';
import { menuController } from '@ionic/core';

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    menuController.enable(true); // Re-enable the menu after login
    history.replace('/it35-lab/app/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={handleLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
