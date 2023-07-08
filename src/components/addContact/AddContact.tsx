import Form from './form/Form'
import { Contact as ContactInterface } from '../../App'

interface Props {
  contactList: ContactInterface[]
  setContactList: any
}

const AddContact = ({ contactList, setContactList }: Props) => {
  
  return (
    <div>
      <h1 style={{padding: '0 0.5em'}}>
        Add a contact
      </h1>
      <Form 
        contactList={contactList} 
        setContactList={setContactList} 
      />
    </div>
  )
}

export default AddContact