import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import ContactItem from './components/ContactItem'


const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

class App extends Component{
  state={
    contactsList:initialContactsList,
    name:'',
    mobileNo:'',
  }

  onAddContact=(event)=>{
    event.preventDefault()
    const {name,mobileNo}=this.state
    const newContact={
      id:uuidv4,
      name,
      mobileNo,
      isFavorite:false   
    }
    this.setState(prevState=>({
      contactsList:[...prevState.contactsList,newContact],
      name:'',
      mobileNo:''
    }))
    
    
  }

  onInputNameChange=(event)=>{
    this.setState({
      name:event.target.value

    })
    
  }
  onInputNumberChane=event=>{
    this.setState({
      mobileNo:event.target.value
    })
  }
  toggleIsFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }


  render(){
    const {contactsList,name,mobileNo}=this.state
    return(
      <div className='app-container'>
        <div className='responsive-container'>
          <h1 className='heading'>Contacts</h1>
          <form className='contact-form-container' onSubmit={this.onAddContact}>
            <input value={name} onChange={this.onInputNameChange} className='input' placeholder='Name'/>
            <input value={mobileNo} onChange={this.onInputNumberChane} className='input' placeholder='Mobile Number'/>
            <button
             type="submit" 
             className='button'
             
             >Add Contact</button>

          </form>
          <ul className='contacts-table'>
            <li className='table-header'>
              <p className='table-header-cell name-column'>Name</p>
                <hr className='separator'/>
                <p className='table-header-cell'>Mobile Number</p>
            </li>
            {contactsList.map(eachContact=>(
              <ContactItem key={eachContact.id} contactDetails={eachContact} toggleIsFavorite={this.toggleIsFavorite}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App