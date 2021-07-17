import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg',
    address: 'Some Address 5, 12345, Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg',
    address: 'Some Address 5, 12345, Some City',
    description: 'This is a second meetup',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg',
    address: 'Some Address 5, 12345, Some City',
    description: 'This is a third meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;