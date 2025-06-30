import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5050/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
