import './App.css'
import { useState } from 'react'

// Components Import
import AddContact from './components/addContact/AddContact'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import EditContact from './components/editContact/EditContact'

export interface Contact {
  id: number,
  name: string,
  email: string,
  phone: string,
  address: string,
  website: string,
  info: string
}

const initContacts: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '0584948371',
    address: 'noone@unknown.com',
    website: 'john_doe.com',
    info: 'I built JavaScript.'
  },
  {
    id: 2,
    name: 'Lord Voldemort',
    email: 'lord_voldemort@evil.unseen',
    phone: '0582438504',
    address: 'Graveyard of Hogwarts',
    website: 'find-harry-potter.com',
    info: 'Harry... I must find Harry Potter!'
  },
  {
    id: 3,
    name: 'Michael scott',
    email: 'michael@example.com',
    phone: '4200004200',
    address: 'Dunder mifflin, Scranton, Pennsylvania',
    website: 'michael-scarn-parkour.com',
    info: 'Regional manager of paper company, Dunder Mifflin'
  },
  {
    id: 4,
    name: 'Harry Potter',
    email: 'harrypotter@magic.com',
    phone: '0481749372',
    address: 'Hogwarts castle Gryffindor room',
    website: 'Privet drive',
    info: "I'm a what?"
  },
  {
    id: 5,
    name: 'Merlin',
    email: 'merlinsbeard@example.com',
    phone: '0481749372',
    address: 'Camelot',
    website: 'protect-king-arthur.com',
    info: 'For camelot!'
  }
]

function App() {
  const [contactList, setContactList] = useState<Contact[]>(initContacts)
  
  // States to show and hide right-column UI's
  const [showMainTitle, setShowMainTitle] = useState(true)
  const [showAddContact, setShowAddContact] = useState(false)
  const [showContactDetails, setShowContactDetails] = useState(false)
  const [showEditDetails, setShowEditDetails] = useState(false)

  // State for updating clicked user from list
  const [currentContact, setCurrentContact] = useState<any>()

  // Handlers for switching right-column UI's
  const handleShowAddContact = () => {
    setShowMainTitle(false)
    setShowContactDetails(false)
    setShowEditDetails(false)

    setShowAddContact(true)
  }

  const handleShowContactDetails = (clickedContact: Contact) => {
    setCurrentContact(clickedContact)
    
    setShowMainTitle(false)
    setShowAddContact(false)
    setShowEditDetails(false)

    setShowContactDetails(true)
  }

  const handleShowEditDetails = () => {
    setShowMainTitle(false)
    setShowAddContact(false)
    setShowContactDetails(false)

    setShowEditDetails(true)
  }

  const handleDeleteContact = (id: number) => {
    setContactList(contactList.filter((contact) => contact.id !== id))

    setShowContactDetails(false)
    setShowAddContact(false)

    setShowMainTitle(true)
  }

  const handleEditContact = (editedContact: Contact) => {
    const UpdatedList = contactList.map((contact: Contact) => {
      if (contact.id === editedContact.id) {
        return {...editedContact}
      }
      return contact
    })
    setContactList(UpdatedList)
  }

  return (
    <div className='container'>

      <div className='left-column'>
        <ContactList 
          contactList={contactList} 
          handleShowAddContact={handleShowAddContact}
          handleShowContactDetails={handleShowContactDetails}
        />
      </div>

      <div className='right-column'>
        {showMainTitle && (
          <>
            <h1>Contact Manager</h1>
          </>
        )}

        {showAddContact && (
          <AddContact contactList={contactList} setContactList={setContactList} />
        )}

        {showContactDetails && (
          <ContactDetails 
            currentContact={currentContact} 
            handleDeleteContact={handleDeleteContact}
            handleShowEditDetails={handleShowEditDetails}
          />
        )}

        {showEditDetails && (
          <EditContact 
            currentContact={currentContact} 
            handleEditContact={handleEditContact}
          />
        )}

      </div>
    </div>
  )
}

export default App
