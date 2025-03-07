import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar, IonThumbnail,IonLabel } from '@ionic/react';

function SearchContainer() {
  const data = [
    { title: 'Capybara 1', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 2', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 3', subtitle: 'InLove', content: 'This capybara is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 4', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 5', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
    { title: 'Capybara 6', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 7', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 8', subtitle: 'InLove', content: 'This Lester is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 9', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 10', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
    { title: 'Capybara 11', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 12', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 13', subtitle: 'InLove', content: 'This Lester is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 14', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 15', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
    { title: 'Capybara 16', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 17', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 18', subtitle: 'InLove', content: 'This Lester is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 19', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 20', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
  
];
  const [results, setResults] = useState<{ title: string; subtitle: string; content: string; icon: string }[]>([]);


  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
  
    if (query.trim() === '') {
      setResults([]); // Hide all items if search is empty
    } else {
      setResults(
        data.filter(
          (d) =>
            d.title.toLowerCase().includes(query) ||
            d.subtitle.toLowerCase().includes(query) ||
            d.content.toLowerCase().includes(query)
        )
      );
    }
  };
  

  return (
    <>
      <IonSearchbar debounce={1000} onIonInput={(event) => handleInput(event)}></IonSearchbar>
  
 
      <div 
        style={{
          background: '#105796', 
          padding: '10px', 
          minHeight: '100vh' 
        }}
      >
        <IonList>
          {results.map((result, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{result.title}</h2>
                <h3>{result.subtitle}</h3>
                <p>{result.content}</p>
              </IonLabel>
              <IonThumbnail slot="start">
                <img src={result.icon} alt={result.title} />
              </IonThumbnail>
            </IonItem>
          ))}
        </IonList>
      </div>
    </>
  );
};
export default SearchContainer;