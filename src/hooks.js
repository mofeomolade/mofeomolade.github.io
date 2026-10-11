import { useEffect } from 'react';

const SITE = 'Mofe Omolade';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : SITE;
  }, [title]);
}
