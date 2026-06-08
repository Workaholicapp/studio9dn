import house_olivia_thumb from 'figma:asset/5220f6b3101963042b6831a38963f7bcd0cd9558.png';
import atlantic_crest_thumb from 'figma:asset/98e27d0bf03ead47bfd86e9b8fd509b635730c89.png';
import restaurant_thumb from 'figma:asset/b1d9572cac920f0dd8640c671cc8dc9f5acf1976.png';
import performing_arts_thumb from 'figma:asset/faff59420755602f7dd77048a85cc4dd1ce2ecfb.png';
import hotel_thumb from 'figma:asset/d626d0c9b2e8a18a87abe97003452c2bcfc371d0.png';
import agodi_hotels_thumb from 'figma:asset/79c702aa0ca3399976eaf36540df50fe88e88643.png';

export interface Project {
  id: string;
  title: string;
  typology: string;
  location: string;
  status: string;
  imageUrl: string;
}

export const projects: Project[] = [
  // Residential Projects
  {
    id: 'house-olivia',
    title: 'House Olivia',
    typology: 'Residential',
    location: 'Lagos, Nigeria',
    status: 'Completed',
    imageUrl: house_olivia_thumb,
  },
  {
    id: 'private-villa',
    title: 'Atlantic Crest',
    typology: 'Mixed-use',
    location: 'V.I, Lagos',
    status: 'Completed 2023',
    imageUrl: atlantic_crest_thumb,
  },
  {
    id: 'coastal-residence',
    title: '5 Star Restaurant',
    typology: 'Commercial',
    location: 'Lekki, Lagos',
    status: 'Completed 2025',
    imageUrl: restaurant_thumb,
  },
  // Institutional Projects
  {
    id: 'performing-arts-center',
    title: 'Performing Arts Center',
    typology: 'Commercial',
    location: 'Ota, Nigeria',
    status: 'Completed 2024',
    imageUrl: performing_arts_thumb,
  },
  {
    id: 'cultural-center',
    title: '4 Star Hotel',
    typology: 'Commercial',
    location: 'Lagos, Nigeria',
    status: 'Completed 2025',
    imageUrl: hotel_thumb,
  },
  {
    id: 'education-campus',
    title: 'Agodi Hotels',
    typology: 'Commercial',
    location: 'Ibadan, Nigeria',
    status: 'In Progress',
    imageUrl: agodi_hotels_thumb,
  },
];
