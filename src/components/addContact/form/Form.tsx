import './Form.css'
import { useState } from 'react'
import { Contact as ContactInterface } from '../../../App' 

interface Props {
  contactList: ContactInterface[],
  setContactList: any
}

const initState = {
  id: 0,
  name: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  info: ''
}

const Form = ({ contactList, setContactList }: Props) => {
  const [state, setState] = useState(initState)

  const update = (e) => {
    const target = e.currentTarget
    const randomId = Math.floor(Math.random() * 1000)

    setState({
      ...state,
      id: randomId,
      [target.name]: target.value
    });
    
  }
  
  const clearForm = () => {
    setState(initState)
  }

  const submit = (e) => {
    e.preventDefault()

    setContactList(() => [state, ...contactList])
  }

  return (
    <form onSubmit={submit}>
      <label>
        <p>Name</p>
        <input 
          type='text'
          name='name'
          onChange={update}
          value={state.name}
        />
      </label>
      <label>
        <p>Email address</p>
        <input 
          type='email'
          name='email'
          onChange={update}
          value={state.email}
        />
      </label>
      <label>
        <p>Phone number</p>
        <input 
          type='text'
          name='phone'
          onChange={update}
          value={state.phone}
        />
      </label>
      <label>
        <p>Address</p>
        <input 
          type='text'
          name='address'
          onChange={update}
          value={state.address}

        />
      </label>
      <label>
        <p>Website</p>
        <input 
          type='text'
          name='website'
          onChange={update}
          value={state.website}

        />
      </label>
      <label>
        <p>Notes</p>
        <textarea 
          name='info'
          onChange={update}
          value={state.info}
        ></textarea>
      </label>

      <div className='form-btns'>
        <button type="submit">
          Save
        </button>
        <button onClick={clearForm}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Form