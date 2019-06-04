import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
  useEffect(() => {

    const listener = (event) => {
      console.log(ref.current)
      if(!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };



    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }
  },[])
}

export { useOnClickOutside };