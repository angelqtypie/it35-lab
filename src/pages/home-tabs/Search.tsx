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
        <IonToolbar style={{ padding: '0' }}> {/* Remove any padding to reduce space */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>Capybara Mood</IonTitle>
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
