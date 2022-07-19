import { useState } from "react";
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Form
        contacts={contacts}
        setContacts={setContacts}
      />
      <List
        contacts={contacts}
      />

    </div>
  );
}

export default App;
