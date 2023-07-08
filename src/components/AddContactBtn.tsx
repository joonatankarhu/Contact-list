interface Props {
  handleShowAddContact: () => void
}

const AddContactBtn = ({ handleShowAddContact }: Props) => {
  return (
    <button onClick={handleShowAddContact}>
      Add Contact
    </button>
  )
}

export default AddContactBtn