import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonCardTitle,
  IonModal,
  IonButton,
} from '@ionic/react';
import './ExploreContainer.css';  // Import custom CSS for enhanced styling

function FavoritesContainer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const cards = [
    { title: 'Capybara 1', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 2', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 3', subtitle: 'InLove', content: 'This capybara is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 4', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 5', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
  ];

  const openModal = (card: any) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div
      style={{
        background: '#105796',
        padding: '10px',
        minHeight: '100vh',
      }}
    >
      {cards.map((card, index) => (
        <IonCard
          key={index}
          button
          onClick={() => openModal(card)}
          className="enhanced-card"  // Apply custom styles for the card
        >
          <IonItem lines="none" className="card-item">
            {/* Left-Aligned Square Image */}
            <IonThumbnail slot="start" className="card-thumbnail">
              <img src={card.icon} alt={`Icon ${index}`} />
            </IonThumbnail>

            {/* Text Content */}
            <IonLabel>
              <IonCardHeader>
                <IonCardTitle className="card-title">{card.title}</IonCardTitle>
                <IonCardSubtitle className="card-subtitle">{card.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="card-content">{card.content}</IonCardContent>
            </IonLabel>
          </IonItem>
        </IonCard>
      ))}

      {/* Modal for detailed view */}
      <IonModal isOpen={showModal} onDidDismiss={closeModal} className="modal">
        <div className="modal-content">
          <IonButton onClick={closeModal} className="close-modal-btn">Close</IonButton>
          {selectedCard && (
            <>
              <IonThumbnail className="modal-thumbnail">
                <img src={selectedCard.icon} alt={selectedCard.title} />
              </IonThumbnail>
              <h2 className="modal-title">{selectedCard.title}</h2>
              <p><strong>Subtitle:</strong> {selectedCard.subtitle}</p>
              <p>{selectedCard.content}</p>
            </>
          )}
        </div>
      </IonModal>
    </div>
  );
}

export default FavoritesContainer;
