// client/src/components/form/Form.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  id: string;
  title: string;
}

export const Form = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/blogs')
      .then(response => {
        setItems(response.data.data.blogs);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};


