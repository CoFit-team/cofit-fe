import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders MotifGallery', () => {
  const { getByText } = render(<App />);
  const motifGalleryElement = getByText("motif-gallery");
  expect(motifGalleryElement).toBeInTheDocument();
});
