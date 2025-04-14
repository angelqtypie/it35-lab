import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';

import { menuController } from '@ionic/core';
import { logOutOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // State to control login/logout
  const history = useHistory();

  const handleLogout = async () => {
    // Close the menu first
    await menuController.close();

    // Clear stored data if any
    localStorage.clear();

    // Update login state and redirect
    setIsLoggedIn(false);

    // Redirect to login page after logout
    history.push("/it35-lab/");
  };

  return (
    <>
      {isLoggedIn && (  // Only render menu if the user is logged in
        <IonMenu contentId="main-content" type="overlay">
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          <IonList>
            <IonItem button routerLink="/it35-lab/app/about">
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem button routerLink="/it35-lab/app/details">
              <IonLabel>Details</IonLabel>
            </IonItem>
          </IonList>
          <IonButton expand="full" color="danger" onClick={handleLogout}>
            <IonIcon icon={logOutOutline} slot="start" />
            Logout
          </IonButton>
          </IonContent>
        </IonMenu>
      )}

   
    </>
  );
};

export default Menu;
