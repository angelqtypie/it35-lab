import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage,   
  IonToolbar, 
  IonButton,
  IonAlert
} from '@ionic/react';

function Favorites() {
  const cards = [
    { icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    {  icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    {  icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" color="light">
        {/* Caption above the button */}
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Click your favorite capybara</h2>

        {/* Click Me Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IonButton id="present-alert">Click Me</IonButton>
        </div>

        {/* Alert Box */}
        <IonAlert
          trigger="present-alert"
          header="Select your favorite capybara"
          buttons={['OK']}
          inputs={[
            { label: 'Capybara 1', type: 'radio', value: 'capybara1' },
            { label: 'Capybara 2', type: 'radio', value: 'capybara2' },
            { label: 'Capybara 3', type: 'radio', value: 'capybara3' },
          ]}
        />
      </IonContent>
    </IonPage>
  );
}

export default Favorites;      