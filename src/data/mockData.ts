import { Pet, Video } from '../types';

export const pets: Pet[] = [
  {
    id: 'p1',
    name: 'Grumpy Cat',
    breed: 'Mixed Breed',
    age: 7,
    rating: 9.8,
    bio: 'Known for her permanently "grumpy" facial appearance, which was caused by an underbite and feline dwarfism.',
    imageUrl: 'https://picsum.photos/seed/grumpy/400/400',
    filmography: ['v1', 'v3']
  },
  {
    id: 'p2',
    name: 'Doge',
    breed: 'Shiba Inu',
    age: 14,
    rating: 9.5,
    bio: 'The face of the Doge meme, known for her expressive face and inner monologue in Comic Sans.',
    imageUrl: 'https://picsum.photos/seed/doge/400/400',
    filmography: ['v2', 'v4']
  },
  {
    id: 'p3',
    name: 'Lil Bub',
    breed: 'Mixed Breed',
    age: 8,
    rating: 9.2,
    bio: 'Famous for her unique appearance due to multiple genetic mutations, including feline dwarfism.',
    imageUrl: 'https://picsum.photos/seed/lilbub/400/400',
    filmography: ['v1', 'v5']
  },
  {
    id: 'p4',
    name: 'Keyboard Cat',
    breed: 'Orange Tabby',
    age: 9,
    rating: 9.0,
    bio: 'A cat wearing a blue shirt playing an electronic keyboard.',
    imageUrl: 'https://picsum.photos/seed/keyboardcat/400/400',
    filmography: ['v6']
  },
  {
    id: 'p5',
    name: 'Gabe the Dog',
    breed: 'Miniature American Eskimo Dog',
    age: 6,
    rating: 8.9,
    bio: 'Known for his borks which were remixed into various songs.',
    imageUrl: 'https://picsum.photos/seed/gabe/400/400',
    filmography: ['v7']
  },
  {
    id: 'p6',
    name: 'Nyan Cat',
    breed: 'Pop-Tart Cat',
    age: 10,
    rating: 9.9,
    bio: 'A flying cat with a Pop-Tart body leaving a rainbow trail, set to a Japanese pop song.',
    imageUrl: 'https://picsum.photos/seed/nyan/400/400',
    filmography: ['v8']
  }
];

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'The Grumpy Encounter',
    genres: ['Comedy', 'Drama'],
    synopsis: 'Grumpy Cat meets Lil Bub for the first time, resulting in a hilarious stare-down.',
    thumbnailUrl: 'https://picsum.photos/seed/encounter/800/450',
    cast: ['p1', 'p3'],
    rating: 8.5,
    releaseYear: 2013
  },
  {
    id: 'v2',
    title: 'Much Wow, Very Doge',
    genres: ['Documentary', 'Comedy'],
    synopsis: 'A deep dive into the daily life of Doge, featuring exclusive borks and side-eyes.',
    thumbnailUrl: 'https://picsum.photos/seed/muchwow/800/450',
    cast: ['p2'],
    rating: 9.1,
    releaseYear: 2014
  },
  {
    id: 'v3',
    title: 'Worst Christmas Ever',
    genres: ['Holiday', 'Comedy'],
    synopsis: 'Grumpy Cat stars in her own holiday special, bringing her signature scowl to the festive season.',
    thumbnailUrl: 'https://picsum.photos/seed/worstxmas/800/450',
    cast: ['p1'],
    rating: 7.8,
    releaseYear: 2014
  },
  {
    id: 'v4',
    title: 'Doge to the Moon',
    genres: ['Sci-Fi', 'Action'],
    synopsis: 'Doge embarks on an epic journey to the moon, fueled by internet memes and cryptocurrency.',
    thumbnailUrl: 'https://picsum.photos/seed/dogemoon/800/450',
    cast: ['p2'],
    rating: 8.9,
    releaseYear: 2021
  },
  {
    id: 'v5',
    title: 'Lil Bub & Friendz',
    genres: ['Documentary'],
    synopsis: 'An award-winning documentary exploring the phenomenon of internet cats, starring Lil Bub.',
    thumbnailUrl: 'https://picsum.photos/seed/bubfriendz/800/450',
    cast: ['p3', 'p1', 'p4'],
    rating: 9.0,
    releaseYear: 2013
  },
  {
    id: 'v6',
    title: 'Play It Again, Cat',
    genres: ['Musical', 'Comedy'],
    synopsis: 'Keyboard Cat performs a medley of classic hits, bringing joy to millions.',
    thumbnailUrl: 'https://picsum.photos/seed/playitagain/800/450',
    cast: ['p4'],
    rating: 8.7,
    releaseYear: 2007
  },
  {
    id: 'v7',
    title: 'Bork Symphony',
    genres: ['Musical', 'Chaos'],
    synopsis: 'Gabe the Dog performs a symphony of borks, remixed into a masterpiece.',
    thumbnailUrl: 'https://picsum.photos/seed/borksymphony/800/450',
    cast: ['p5'],
    rating: 9.3,
    releaseYear: 2016
  },
  {
    id: 'v8',
    title: 'Rainbow Trail',
    genres: ['Animation', 'Musical'],
    synopsis: 'Nyan Cat flies through space, leaving a rainbow trail to a catchy tune.',
    thumbnailUrl: 'https://picsum.photos/seed/rainbowtrail/800/450',
    cast: ['p6'],
    rating: 9.7,
    releaseYear: 2011
  }
];
