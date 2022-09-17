import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import Modal from 'react-modal';
import "./style.css"

const customStyles = {
  content: {
    
    top: '50%',
    borderRadius: '20px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#4FD1C570',
    border: 'none',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function UserModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [file, setFile] = React.useState()
  function handleChange(event) {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <div className='modal'>
      <button className='open' onClick={openModal}>Become a Guide</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <div class="container">  
  <form id="contact__1" action="" method="post">
  <button className='cross' onClick={closeModal}><AiOutlineClose/></button>
    <h3>Profile</h3>
    <h4>Enter your details to complete registration!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Contact Number" type="tel" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Enter your address" type="text" tabindex="3" required/>
    </fieldset>
    <fieldset>
        <div className='file'>
        <label className='lable-file' for="choose-file">Select Your Profile Photo</label>
        <input className="choose-file" id="choose-file" type="file" onChange={handleChange}/>
        <img className="profile" src={file} height="100" whidth="100" />
        </div>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>


    </fieldset>
  </form>
 
  
</div>
      </Modal>
    </div>
  );
}

export default UserModal;