import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The Meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupDate: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg/1200px-Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The Meetup description',
      },
    },
  };
}

export default MeetupDetails;
