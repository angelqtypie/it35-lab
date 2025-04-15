import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from '@ionic/react';
import React from 'react';
import SearchContainer from '../../components/SearchContainer';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle style={{ textAlign: 'center' }}>Capybara Mood</IonTitle>
        </IonToolbar>
          <IonButtons slot='start'>
          <IonMenuButton />
          </IonButtons>

      </IonHeader>
      <IonContent fullscreen  >
      <div 
          style={{
            background:'#105796',
          }}
        >
        <SearchContainer /> 
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
