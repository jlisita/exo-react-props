import './App.css';
import Header from './Header'
import Profil from './Profil'

const App = () => {

  const userData = {
    firstName: "David",
    lastName: "Robert",
    job: "web dev",
    age: "34",
  };

  return (
    <div className="App">
      <Header user = {userData}/>
      <Profil user = {userData}/>
    </div>
  );
};

export default App;
