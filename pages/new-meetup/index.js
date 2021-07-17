import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupDate) {
    console.log(enteredMeetupDate);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
