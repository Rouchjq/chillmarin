import profile1 from 'assets/images/profile1.jpg';
import profile2 from 'assets/images/profile2.jpg';
import profile3 from 'assets/images/profile3.jpg';
import profile4 from 'assets/images/profile4.jpg';
import profile5 from 'assets/images/profile5.jpg';
import profile6 from 'assets/images/profile6.jpg';
import profile7 from 'assets/images/profile7.jpg';

export interface profiles {
  id: number;
  name: string;
  job: string;
  img: any;
}

export const people = [
  { id: 1, name: 'John Doe', job: 'Web Developer', img: profile1 },
  { id: 2, name: 'John Doe', job: 'Web Developer', img: profile2 },
  { id: 3, name: 'John Doe', job: 'Web Developer', img: profile3 },
  { id: 4, name: 'John Doe', job: 'Web Developer', img: profile4 },
  { id: 5, name: 'Balery Carrillo', job: 'Hace quesi yoga', img: profile5 },
  { id: 6, name: 'John Doe', job: 'Web Developer', img: profile6 },
  { id: 7, name: 'John Doe', job: 'Web Developer', img: profile7 },
  { id: 8, name: 'John Doe', job: 'Web Developer', img: profile1 },
];
