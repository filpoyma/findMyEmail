import React from 'react';

export const OverlayContext = React.createContext({
  closeOverlay: () => {},
  openOverlay: () => {},
  isOverlayShown: false,
});
