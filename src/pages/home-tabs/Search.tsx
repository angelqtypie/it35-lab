import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import SearchContainer from '../../components/SearchContainer';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark"> 
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
           <div style={{ textAlign: 'center', padding: '10px 0' }}>
             <IonTitle style={{ fontWeight: 'bold', fontSize: '22px', color: 'var(--ion-color-light)' }}>
               Capybara Mood
             </IonTitle>
             <p style={{ margin: 0, fontSize: '14px', color: 'var(--ion-color-light-tint)' }}>
               Search your moods with a chill capybara
             </p>
           </div> 
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ background: '#105796' }}>
          <SearchContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
