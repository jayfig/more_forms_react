import React,{useState} from 'react';
import Form from './components/Forms';
import './App.css';
import Results from './components/Results';
//Download react dev tools for chrome.
function App() {
  //Props can only go from parent to child.
  //In order to pass the state. In order for other compoents to use the same state then we should global it so it can be used in multple compl
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <Form 
      setFirstName={setFirstName}
      setLastName = {setLastName}
      setEmail = {setEmail}
      setPassword = {setPassword}
      setConfirmPassword = {setConfirmPassword}
      />
      <Results 
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      confirmPassword={confirmPassword}/>
    </div>
  );
}

export default App;
