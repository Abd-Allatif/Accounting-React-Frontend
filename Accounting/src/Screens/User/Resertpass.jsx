import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Tools/Loader'

function Resetpass() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [resetCode, setResetCode] = useState(''); 
  const [newPassword, setNewPassword] = useState('');  
  const [confirmPassword,setConfirmPassword] = useState('');
  const [loading,setLoading] = useState(false);

    const sendNewPassword = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (newPassword !== confirmPassword) {
            setLoading(false);
            window.alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/reset-password/`, {
              username, 
              email, 
              reset_code: resetCode, 
              new_password: newPassword,
            });
            window.alert(response.data.message);
            setLoading(false);
            window.location.href = '/';
        } catch (error) {
          setLoading(false);
          window.alert("An Error Happend while Resetting Your Password Please try Again Later");
        }
    };


    return (
        <StyledWrapper>
            <div className='Container'>
                <form className="form">
                    <p id="heading">Reset Password</p>
                    <div className='InputContainer'>
                    <div className="field">
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                            </svg>
                            <input autoComplete="off" placeholder="User Name" className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value.toLowerCase())} />
                        </div>
                        <div className="field">
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input autoComplete="off" placeholder="Email" className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                        </div>
                        <div className="field">
                            <input autoComplete="off" placeholder="Reset Code" className="input-field" type="text" value={resetCode} onChange={(e) => setResetCode(e.target.value)} />
                        </div>
                        <div className="field">
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                            <input placeholder="New Password" className="input-field" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>

                        <div className="field">
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                            <input placeholder="Confirm Password" className="input-field" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>

                    </div>
                    <div className="btn">
                        <button className="button1" onClick={sendNewPassword} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>                    </div>
                    <div className='Loader'>
                        {loading && <Loader width='3' height='20' animateHeight='36' />}
                    </div>
                </form>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .Container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  --s: 37px; /* control the size */

  --c: #0000, #282828 0.5deg 119.5deg, #0000 120deg;
  --g1: conic-gradient(from 60deg at 56.25% calc(425% / 6), var(--c));
  --g2: conic-gradient(from 180deg at 43.75% calc(425% / 6), var(--c));
  --g3: conic-gradient(from -60deg at 50% calc(175% / 12), var(--c));
  background: var(--g1), var(--g1) var(--s) calc(1.73 * var(--s)), var(--g2),
    var(--g2) var(--s) calc(1.73 * var(--s)), var(--g3) var(--s) 0,
    var(--g3) 0 calc(1.73 * var(--s)) #1e1e1e;
  background-size: calc(2 * var(--s)) calc(3.46 * var(--s));
}

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;

    width:45vw;
    height:85vh;
    transition: .4s ease-in-out;
  }

  .form:hover {
    transform: scale(1.01);
    border: 1px solid black;
  }

  .InputContainer{
    margin-top: 25px;
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    margin-bottom: 15px;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);

    margin-left:5em;
    margin-right:5em;
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;

    &.input-field::placeholder{
        text-align: center;
    }
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.7em;
    margin-bottom: 1em;
  }

  .form .btn1 {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 0.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button1:hover {
    background-color: black;
    color: white;
  }

  
  .Loader{
    align-self: center;
  }

    @media (min-width: 768px) and (max-width: 1024px){
    .form {
      padding-left: 2em;
      padding-right: 2em;
      padding-bottom: 0.4em;

      width:80vw;
      height:55vh;

      overflow-y: auto;
  }
  }


  @media (max-width: 768px) {
    .form {
    margin: 1.3em;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;

    width:75vw;
    height:90vh;

    overflow-y: auto;
  }

  .field{
    margin-left:0;
    margin-right:0;
  }
    }

  `;

export default Resetpass