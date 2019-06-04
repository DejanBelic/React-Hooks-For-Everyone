import { useLayoutEffect } from 'react';

export function useBodyScrollLock() {
  useLayoutEffect(() => {
    // Will wait to dom completes - so we will have all dom methods available.
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

   return () => {
      document.body.style.overflow = originalOverflow;
    }
  },[])
}