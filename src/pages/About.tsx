import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText, 
  IonCard, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" scrollY={false} >
        <IonCard>
          <IonCardContent>
            <IonTitle>Your Capybara Mood Hub</IonTitle>
            <IonText>
              <p>Welcome to the ultimate Capybara fan app! This app lets you explore, share, and connect with other Capybara lovers!</p>
              <p>Here's what you can do:</p>
              <IonList>
                <IonItem>
                  <IonLabel>
                    <strong>Postwal:</strong> Share your thoughts, updates, or anything related to Capybaras in text form! Engage with the community by posting your text-based stories, comments, or experiences. No photos or videos—just simple, text-based posts to share the joy of Capybaras.
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Capybara Search:</strong> Discover a wide range of Capybara-related text posts from other users. Browse by mood, text content, or topic and enjoy the relaxing vibes of Capybaras.
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Favorites:</strong> Save your favorite Capybara posts in a personalized collection. Instead of a rating system, each card will let you tap and explore more details about the Capybara info associated with that post. It's a great way to keep track of posts that made you smile!
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Edit Profile:</strong> Personalize your profile to make it truly yours! Change your avatar, update your username, and modify your bio directly from the side menu. Let everyone know how much you love Capybaras!
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Interactive Mood Cards:</strong> View and interact with Capybara mood posts. You can easily tap on a mood card to see more about the post, including its details and any fun text-based comments that might be there.
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Share Your Capybara Story:</strong> Post your personal Capybara experiences and text-based stories. The community will love to hear how Capybaras have made your day brighter!
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* Developer Information */}
        <IonCard>
          <IonCardContent>
            <IonText className="ion-text-center">
              <p><strong>By Developer:</strong> Lester Lablab Angel</p>
            </IonText>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;
