import { useEffect, useState } from 'react'
import { Contact as ContactInterface} from '../App' 

interface Props {
  contactList: ContactInterface[],
  setIsSearching: any,
  setFilteredList: any
}

const Search = ({ contactList, setIsSearching, setFilteredList }: Props) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e: any) => {
    const search = e.target.value.toLowerCase()
    setSearchInput(search)
  }

  useEffect(() => {
    if (searchInput !== '') {
      setIsSearching(true)
      const filteredContacts = contactList.filter((contact) => contact.name.toLowerCase().includes(searchInput))
      setFilteredList(filteredContacts)
    } else {
      setIsSearching(false)
    }
  }, [searchInput])

  return (
    <div className='search-input'>
      <input 
        type="text" 
        onChange={handleChange}    
        value={searchInput}  
      />
    </div>
  )
}

export default Search