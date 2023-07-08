import './ContactList.css'
import AddContactBtn from "./AddContactBtn"
import Contact from './Contact'
import Search from './Search'
import { useState } from 'react'

import { Contact as ContactInterface } from '../App' 

const ContactList = ({ contactList, handleShowAddContact, handleShowContactDetails }: any) => {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredList, setFilteredList] = useState<ContactInterface[]>([])

  return (
    <div className='list-container'>
      <Search 
        contactList={contactList} 
        setIsSearching={setIsSearching}
        setFilteredList={setFilteredList}
      />

      {isSearching && filteredList && filteredList.map((contact: ContactInterface, i: number) => {
        return (
          <Contact 
            key={'contact' + i} 
            contact={contact} 
            handleShowContactDetails={handleShowContactDetails}
          />
        )
      })}

      {!isSearching && contactList && contactList.map((contact: ContactInterface, i: number) => {
        return (
          <Contact 
            key={'contact' + i} 
            contact={contact} 
            handleShowContactDetails={handleShowContactDetails}
          />
        )
      })}

      <AddContactBtn handleShowAddContact={handleShowAddContact}/>
    </div>
  )
}

export default ContactList