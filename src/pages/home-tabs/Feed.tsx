import React from 'react';
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
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';

function Feed() {
  const cards = [
    { title: 'Capybara 1', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 2', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 3', subtitle: 'InLove', content: 'This capybara is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 4', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 5', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {cards.map((card, index) => (
          <IonCard key={index} style={{ display: 'flex', alignItems: 'center', width: '90%', margin: '10px auto' }}>
            <IonItem lines="none" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {/* Left-Aligned Square Image */}
              <IonThumbnail slot="start" style={{ width: '60px', height: '60px', marginRight: '15px' }}>
                <img src={card.icon} alt={`Icon ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
              </IonThumbnail>

              {/* Text Content */}
              <IonLabel>
                <IonCardHeader>
                  <IonCardTitle>{card.title}</IonCardTitle>
                  <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>{card.content}</IonCardContent>
              </IonLabel>
            </IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}

export default Feed;

