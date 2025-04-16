import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage,   
  IonToolbar, 
  IonButton,
  IonTitle,
  IonAlert
} from '@ionic/react';

function Favorites() {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
<div style={{ textAlign: 'center', padding: '10px 0' }}>
             <IonTitle style={{ fontWeight: 'bold', fontSize: '22px', color: 'var(--ion-color-light)' }}>
               Capybara Mood
             </IonTitle>
             <p style={{ margin: 0, fontSize: '14px', color: 'var(--ion-color-light-tint)' }}>
               Pick your moods with a chill capybara
             </p>
           </div> 
          <IonButtons slot='start'>
          <IonMenuButton />
          </IonButtons>
        </IonToolbar>
        
      </IonHeader>
      

      <IonContent className="ion-padding">
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'Flex-start',
    alignItems: 'center',
    height: '77.4vh', 
    width: '100%',  
    textAlign: 'center',
    paddingTop: '30vh',
    background:'#105796' 
  }}>
    <h2 style={{color: 'white'}}>Click your favorite capybara</h2>
    <IonButton id="present-alert" color="light">Click Me</IonButton>
  </div>

        <IonAlert
          trigger="present-alert"
          header="Select your favorite capybara"
          buttons={['OK']}
          inputs={[
            { label: 'Capybara 1', type: 'radio', value: 'capybara1' },
            { label: 'Capybara 2', type: 'radio', value: 'capybara2' },
            { label: 'Capybara 3', type: 'radio', value: 'capybara3' },
            { label: 'Capybara 4', type: 'radio', value: 'capybara4' },
            { label: 'Capybara 5', type: 'radio', value: 'capybara5' },
          ]}
        />

      </IonContent >

    </IonPage>
  );
}

export default Favorites;      