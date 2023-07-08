import { Contact as ContactInterface } from "../App"

interface Props {
  contact: ContactInterface,
  handleShowContactDetails: () => void
}

const Contact = ({ contact, handleShowContactDetails }: Props) => {
  return (
    <div onClick={() => handleShowContactDetails(contact)}>
      <p>{contact.name}</p>
    </div>
  )
}

export default Contact