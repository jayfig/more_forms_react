import React from 'react';

const Results = (props) => {
    const { firstName, lastName, email, password, confirmPassword } = props;
    return (
        <div>
            <h2>Results</h2>
            <div>
                <p>First Name : {firstName}</p>
                {firstName.length < 3 ?
                    (<p>Name must be greater than 3 characters</p>) :
                    <p></p>}
            </div>
            <div>
                <p>Last Name : {lastName}</p>
                {lastName.length < 3 ?
                    (<p>Last name must be greater than 3 characters</p>) :
                    <p></p>}
            </div>
            <div>
                <p>Email : {email}</p>
                {email.length < 5 ?
                    (<p>Email must be greater than 3 characters</p>) :
                    <p></p>}
            </div>
            <div>
                <p>Password : {password}</p>
                {password.length < 8 ?
                    <p>Password must be greater than 8 characters</p> :
                    <p></p>}
            </div>
            <div>
                <p>Confirm Password : {confirmPassword}</p>
                {confirmPassword !== password ?
                <p>Password does not match</p>:
                <p></p>}
            </div>

        </div >

    )
}

export default Results;