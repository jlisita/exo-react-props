import './App.css';
import Header from './Header'
import Profil from './Profil'
import Footer from './Footer'

const App = () => {

  const userData = {
    firstName: "David",
    lastName: "Robert",
    job: "web dev",
    age: "34",
  };

  const currentDate = "3 avril 2024";

  return (
    <div className="App">
      <Header user = {userData} date = {currentDate}/>
      <Profil user = {userData}/>
      <Footer date = {currentDate}/>
    </div>
  );
};

export default App;
