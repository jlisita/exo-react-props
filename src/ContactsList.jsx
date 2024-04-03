const ContactsList = ({nbrContact}) => {

    return (
      <section className="App-contactList">
        <p>Nombre de contacts: {nbrContact}</p>
        <button>Importer vos contacts par mail</button>
      </section>
    );
  };
  
  export default ContactsList;