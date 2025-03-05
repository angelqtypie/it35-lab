import { 
    IonCard,
      IonCardContent, 
      IonCardHeader, 
      IonCardSubtitle, 
      IonButtons,
      IonMenuButton,
      IonToolbar,
      IonHeader, 
      IonPage, 
      IonCardTitle 
  } from '@ionic/react';
 
      
     function Feed() {
        return (
          <IonPage>
 <IonHeader>
              <IonToolbar>
                      <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                      </IonButtons>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
          </IonToolbar>
          </IonHeader>
        
           </IonPage>
    );
  };
  
  export default Feed;