import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import styled from 'styled-components';

const Notification = () => {
    const [persons, setPersons] = useState([]);
    const [message, setMessage] = useState('');
    const { setNotification } = useContext(StoreContext);

    const handlePersonSelection = (e, person) => {
        setPersons((prevPersons) => {
            const arr = [...prevPersons];
            if (e.target.checked) {
                if (!arr.includes(person)) {
                    arr.push(person);
                }
            } else {
                const index = arr.indexOf(person);
                if (index > -1) {
                    arr.splice(index, 1);
                }
            }
            return arr;
        });
    };

    const handleClick = () => {
        if (persons.length === 0) {
            alert("Please select whom to send the notification.");
            return;
        }
        if (message.length === 0) {
            alert("Please enter the message.");
            return;
        }
        setNotification({
            persons: persons,
            message: message,
        });
        setPersons([]);
        setMessage('');
    };

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setIsActive(false), 1200);
            return () => clearTimeout(timer);
        }
    }, [isActive]);
    return (
        <StyledWrapper>
            <div className='h-screen bg-black flex justify-center items-center'>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <div className="mb-4 ">
                                <label >Send To:</label>
                                <div className={`justify-around border  rounded-lg 
                                p-3 items-center gap-2 outline-none transition-all duration-300
                                ${isActive ? "border-[#e81cff]" : "border-gray-700"}`}>
                                    {["Admin", "Coordinator", "Selected Students", "All Students"].map((person) => (
                                        <label key={person} className="flex items-center gap-x-3 p-2 mb-2">
                                            <input
                                                type="checkbox"
                                                value={person}
                                                checked={persons.includes(person)}
                                                onChange={(e) => handlePersonSelection(e, person)}
                                                onClick={() => setIsActive(true)}
                                                className="w-5 h-4"
                                            />
                                            {person}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="mb-4">
                                <label>Enter Message:</label>
                                <textarea
                                    id="msg"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter notification here..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                onClick={handleClick}
                                className="form-submit-btn"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }


  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }


  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }`;

export default Notification;

