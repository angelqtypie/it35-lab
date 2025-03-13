
import React, { useState } from 'react';
import { IonInput, IonItem, IonList,
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonLabel,
    useIonRouter,
    IonButton,
    IonAlert } from '@ionic/react';

const Register: React.FC = () => {
      const navigation = useIonRouter();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [showAlert, setShowAlert] = useState(false);
    const doLogin = () => {
        if (username === '' || password === '') {
          setShowAlert(true);
        } else {
          navigation.push('/it35-lab/app', 'forward', 'replace');
        }
      }
    
  return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding background-image' id="loginbackground">
      <IonItem>
        <IonInput label="Text input" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Number input" type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Password input" type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonButton onClick={doLogin} expand="full" className="ion-margin-top">
               Login
             </IonButton>
             <IonAlert
               isOpen={showAlert}
               onDidDismiss={() => setShowAlert(false)}
               header={'Error'}
               message={'Please enter both username and password.'}
               buttons={['OK']}
             />
                   </IonContent>
                 </IonPage>
  );
};
export default Register;