import { useLayoutEffect } from 'react';

export function useBodyScrollLock() {
  useLayoutEffect(() => {
    // Will wait to dom completes - so we will have all dom methods available.
    document.body.style.overflow = 'hidden';
  })
}