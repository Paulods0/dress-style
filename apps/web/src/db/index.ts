export type Suit = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export const SUITS_DATA: Suit[] = [
  {
    id: 1,
    title: 'Slim Fit Black Ecru Suit',
    image: '/images/card-suit-1.webp',
    price: 250_000,
  },
  {
    id: 2,
    title: 'Slim Fit Black Ecru Suit',
    image: '/images/card-suit-2.webp',
    price: 300_000,
  },
  {
    id: 3,
    title: 'Slim Fit Black Ecru Suit',
    image: '/images/card-suit-3.webp',
    price: 440_000,
  },
  {
    id: 4,
    title: 'Slim Fit Black Ecru Suit',
    image: '/images/card-suit-4.webp',
    price: 770_000,
  },
];
