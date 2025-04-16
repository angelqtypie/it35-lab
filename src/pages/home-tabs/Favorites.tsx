import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from '@ionic/react';
import FavoritesContainer from '../../components/FavoritesContainer';  // Import the container component

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
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <FavoritesContainer /> {/* This is the container that holds the card logic and modal */}
      </IonContent>
    </IonPage>
  );
}

export default Favorites;
