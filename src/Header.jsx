const Header = ({user, date}) => {

    return (
      <>
        <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph%22," alt = "logo" width = "150"/>  
        <p>Bienvenue {user.firstName} {user.lastName}</p>
        <p>Nous sommes le {date}</p>
      </>
    );
  };
  
  export default Header;