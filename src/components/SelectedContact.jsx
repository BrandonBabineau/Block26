
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      const fetchSelectedContact = async () => {
        try {
          const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (selectedContactId) {
        fetchSelectedContact();
      }
    }, [selectedContactId]);
  
    useEffect(() => {
      console.log("Contact:", contact);
    }, [contact]);
  
    return (
      <div>
        {contact ? (
          <div>
            <h2>Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            {/* Add more properties as needed */}
          </div>
        ) : (
          <p>No contact selected</p>
        )}
      </div>
    );
}
  }