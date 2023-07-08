import './ContactDetails.css'
import { Contact as ContactInterface } from '../App'

interface Props {
  currentContact: ContactInterface,
  handleDeleteContact: (id: number) => void,
  handleShowEditDetails: () => void
}

const ContactDetails = ({ currentContact, handleDeleteContact, handleShowEditDetails }: Props) => {
  const { id, name, phone, email, address, website, info } = currentContact

  return (
    <div className='contact-details'>
      <h2>{name}</h2>
      <div className='details'>
        {phone && (
          <p>Phone: <span>{phone}</span></p>
        )}
        {email && (
          <p>Email: <span>{email}</span></p>
        )}
        {address && (
          <p>Address: <span>{address}</span></p>
        )}
        {website && (
          <p>Website: <span>{website}</span></p>
        )}
        {info && (
          <p>Info: <span>{info}</span></p>
        )}
      </div>
      <div className='btns'>
        <button onClick={() => handleDeleteContact(id)}>
          Remove
        </button>
        <button onClick={() => handleShowEditDetails()}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default ContactDetails