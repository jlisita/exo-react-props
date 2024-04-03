import './App.css';
import Header from './Header'
import Profil from './Profil'
import Footer from './Footer'
import ContactsList from './ContactsList';

const App = () => {

  const userData = {
    firstName: "David",
    lastName: "Robert",
    job: "web dev",
    age: "34",
  };

  const currentDate = "3 avril 2024";

  let nbrContact = 450;

  return (
    <div className="App">
      <Header user = {userData} date = {currentDate} nbrContact = {nbrContact}/>
      <Profil user = {userData}/>
      <ContactsList nbrContact = {nbrContact}/>
      <Footer date = {currentDate}/>
    </div>
  );
};

export default App;
