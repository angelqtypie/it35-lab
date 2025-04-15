import React, { useState, useEffect } from 'react';
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
  useIonViewWillEnter  // Import the hook
} from '@ionic/react';
import { colorFill } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Clear form fields when the login page is loaded
  useIonViewWillEnter(() => {
    setUsername('');
    setPassword('');
  });

  const doLogin = () => {
    if (username === '' || password === '') {
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
            background:'#105796',
            display: 'flex',
            height:'91.3vh' ,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Centered Avatar */}
          <IonAvatar style={{ width: '100px', height: '100px', marginBottom: '20px' }}>
            <img alt="User Avatar" src="https://heucollege.edu.vn/upload/2025/02/avatar-capybara-cute-4.webp" />
          </IonAvatar>
          <IonItem 
  lines="inset"
  className="ion-margin-vertical"
  color="light"
  style={{ width: '300px', maxWidth: '90%', borderRadius: '10px' }}
>
  <IonLabel position="floating" color="primary">Username</IonLabel>
  <IonInput 
    value={username} 
    onIonChange={e => setUsername(e.detail.value!)} 
    required
    autocomplete="off"
    color="dark"
  />
</IonItem>

<IonItem 
  lines="inset"
  className="ion-margin-bottom"
  color="light"
  style={{ width: '300px', maxWidth: '90%', borderRadius: '10px' }}
>
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

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
