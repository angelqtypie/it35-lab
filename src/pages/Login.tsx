import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonAvatar,
  IonAlert,
  useIonRouter,
  useIonViewWillEnter,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient'; // adjust the path if needed

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useIonViewWillEnter(() => {
    setUsername('');
    setPassword('');
  });

  const doLogin = async () => {
    if (username === '' || password === '') {
      setAlertMessage('Please enter your email and password.');
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });

    if (error) {
      setAlertMessage('Login failed: ' + error.message);
      setShowAlert(true);
    } else {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <IonTitle style={{ fontWeight: 'bold', fontSize: '22px', color: 'var(--ion-color-light)' }}>
              Capybara Mood
            </IonTitle>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--ion-color-light-tint)' }}>
              Track your moods with a chill capybara
            </p>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen scrollY={false}>
        <div
          style={{
            background: '#105796',
            display: 'flex',
            height: '91.3vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <IonAvatar style={{ width: '100px', height: '100px', marginBottom: '20px' }}>
            <img alt="User Avatar" src="https://heucollege.edu.vn/upload/2025/02/avatar-capybara-cute-4.webp" />
          </IonAvatar>

          <IonItem lines="inset" className="ion-margin-vertical" color="light" style={{ width: '300px', maxWidth: '90%', borderRadius: '10px' }}>
            <IonLabel position="floating" color="primary">Email</IonLabel>
            <IonInput
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
              required
              autocomplete="off"
              color="dark"
            />
          </IonItem>

          <IonItem lines="inset" className="ion-margin-bottom" color="light" style={{ width: '300px', maxWidth: '90%', borderRadius: '10px' }}>
            <IonLabel position="floating" color="primary">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              required
              autocomplete="off"
              color="dark"
            />
          </IonItem>

          <IonButton
            onClick={doLogin}
            expand="block"
            color="primary"
            className="ion-margin-bottom"
            style={{ width: '300px', maxWidth: '90%', fontWeight: 'bold' }}
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/register"
            expand="block"
            fill="clear"
            shape="round"
            color="light"
            style={{ width: '300px', maxWidth: '90%', textDecoration: 'underline' }}
          >
            Don't have an account? Register here
          </IonButton>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Login Error"
            message={alertMessage}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
