const Profil = (props) => {

    return (
      <section className="App-profil">
        <p>nom: {props.user.lastName}</p>
        <p>prénom: {props.user.firstName}</p>
        <p>job: {props.user.job}</p>
        <p>age: {props.user.age}</p>
      </section>
    );
  };
  
  export default Profil;