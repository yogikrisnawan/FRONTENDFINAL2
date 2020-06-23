import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://img.favpng.com/19/24/0/pepe-the-frog-desktop-wallpaper-clip-art-png-favpng-Ppwas1d5tL2zf9ysgHPPdW99Y.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'data:image/jpeg;base64,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',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://i.pinimg.com/236x/06/67/39/066739a2181749835957a8e52c224395--isla-fisher-swimsuits-one-pieces.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Kharis = () => <UncontrolledCarousel items={items} />;

export default Kharis;