import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonAvatar
} from '@ionic/react';
import { colorFill } from 'ionicons/icons';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: 'center'}}>Capybara Mood</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
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

          {/* Centered Login Button */}
          <IonButton 
            onClick={doLogin} 
            style={{ width: '200px', fontSize: '18px' }}>
            Enter
          </IonButton>
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Login;
