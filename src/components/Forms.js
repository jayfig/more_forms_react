import React from 'react';

const Form = (props) =>{
    // const [firstName,setFirstName] = useState('');
    // const [age,setAge] = useState(0);
    //We can pull it out of props so it can be used multple times.
    // const {setAge,setFirstName} = props;
    return(
        <form>
            <div>
                <label>First Name</label>
                <input 
                type='text' 
                name='firstName' 
                onChange={(e) =>props.setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name </label>
                <input type='text' name='lastName'
                onChange={(e) =>props.setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email'
                onChange={(e) =>props.setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password'
                onChange={(e) =>props.setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type='password' name=''
                onChange={(e) =>props.setConfirmPassword(e.target.value)} />
            </div>
            
        </form>
    )
}

export default Form;