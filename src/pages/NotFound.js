import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = '404 | Page not found';
  });

  return <div>NotFound</div>;
}

export default NotFound;
