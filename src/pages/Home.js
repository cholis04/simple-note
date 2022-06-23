import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  return <div>Hello World</div>;
}

export default Home;
