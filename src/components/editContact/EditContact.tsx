import Form from './form/Form'
import { Contact as ContactInterface } from '../../App'

interface Props {
  currentContact: ContactInterface,
  handleEditContact: (editedContact: ContactInterface) => void
}

const EditContact = ({ currentContact, handleEditContact }: Props) => {
  return (
    <div>
      <h1 style={{padding: '0 0.5em'}}>
        Edit Contact
      </h1>
      <Form 
        currentContact={currentContact}
        handleEditContact={handleEditContact}
      />
    </div>
  )
}

export default EditContact