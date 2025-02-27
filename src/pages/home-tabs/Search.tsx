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
  
  const Search: React.FC = () => {
    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            Search
          </div>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Search;