import './App.css'
import { useState } from "react";
import ContactList from "./components/Contactlist";
import SelectedContact from "./components/ContactRow";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
        
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}