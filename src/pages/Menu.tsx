import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { menuController } from '@ionic/core';
import { logOutOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
  const history = useHistory();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleLogout = async () => {
    await menuController.close(); // Close the menu if open
    await menuController.enable(false); // Disable the menu so it won't appear
    localStorage.removeItem('loggedIn'); // Remove login status
    history.replace('/it35-lab/'); // Redirect to login
  };

  return (
    <>
      {isLoggedIn && (
        <IonMenu contentId="main-content" type="overlay">
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonItem routerLink="/it35-lab/app/about" routerDirection="none">
                <IonLabel>About</IonLabel>
              </IonItem>
              <IonItem routerLink="/it35-lab/app/details" routerDirection="none">
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
