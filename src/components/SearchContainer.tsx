import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar, IonThumbnail, IonLabel } from '@ionic/react';

function SearchContainer() {
  const data = [
    { title: 'Capybara 1', subtitle: 'Amazed', content: 'This capybara is amazed because na amazed ra.', icon: 'https://i.postimg.cc/52D9DHJ1/amazedcappy.png' },
    { title: 'Capybara 2', subtitle: 'Hungry', content: 'This capybara is gutomers.', icon: 'https://i.postimg.cc/JnszFbD1/hungrycapy.png' },
    { title: 'Capybara 3', subtitle: 'InLove', content: 'This capybara is inlove with yah.', icon: 'https://i.postimg.cc/t4gdgM8D/inlovecapy.png' },
    { title: 'Capybara 4', subtitle: 'Angry', content: 'This capybara want to stability you!.', icon: 'https://i.postimg.cc/cCgHjfzR/madcappy.png' },
    { title: 'Capybara 5', subtitle: 'Sleeping', content: 'This capybara is so tired na sayo!.', icon: 'https://i.postimg.cc/2yDkHg4D/sleppycappy.png' },
  ];

  const [results, setResults] = useState<{ title: string; subtitle: string; content: string; icon: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setLoading(true); // Set loading state to true on every search input

    setTimeout(() => {  // Simulate delay
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
      setLoading(false); // Set loading state to false once the search is done
    }, 500); // Simulated delay of 500ms for search
  };

  return (
    <>
      <IonSearchbar debounce={1000} onIonInput={(event) => handleInput(event)}></IonSearchbar>

      <div
  style={{
    background: '#2C3E50',
    padding: '16px',
    height: 'calc(100vh - 170px)', // 56px accounts for the searchbar height
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '16px',
    boxSizing: 'border-box',
  }}
>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: 'calc(100vh - 200px)',
              color: '#ecf0f1', 
            }}
          >
            <div className="loading-spinner" style={{ animation: 'spin 1s infinite linear' }}></div>
            <p style={{ color: '#ecf0f1', marginTop: '10px', alignContent:'center'}}>Loading...</p>
          </div>
        ) : results.length === 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '100vh',
              color: '#ecf0f1',
            }}
          >
            <p>No results found</p>
          </div>
        ) : (
          results.map((result, index) => (
            <div
            key={index}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={result.icon}
              alt={result.title}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '8px',
              }}
            />
            <h2 style={{ fontSize: '14px', margin: '2px 0', color: '#222' }}>{result.title}</h2>
            <h3 style={{ fontSize: '12px', margin: '2px 0', color: '#666' }}>{result.subtitle}</h3>
            <p style={{ fontSize: '11px', color: '#444' }}>{result.content}</p>
          </div>
          ))
          
        )}
      </div>
    </>
  );
}

export default SearchContainer;
