import { useAddress, useMintNFT, useNFTCollection } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import "./style.css";
import { ethers } from "ethers";
import axios from "axios"
import lighthouse from "@lighthouse-web3/sdk"

const customStyles = {
  content: {
    top: "50%",
    borderRadius: "20px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4FD1C570",
    border: "none",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function UserModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState();
  const [ContactNumber, setContactNumber] = useState();
  const [UserAddress, setUserAddress] = useState();
  const [Files, setFiles] = useState();
  const [imageHash, setImageHash] = useState();

  const nftCollection = useNFTCollection(
    "0x08Ae2736A4ef64eb8CeaD739BD342eB0187B1295"
  );

  const wallet_address = useAddress();
  const {mutate: mintNft, isLoading, error} = useMintNFT(nftCollection);

  const sign_message = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress(); //users public key
    const messageRequested = (
      await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
      )
    ).data; //Get message
    const signedMessage = await signer.signMessage(messageRequested); //Sign message
    return {
      signedMessage: signedMessage,
      address: address,
    };
  };

  const deploy = async (e) => {
    // Sign message for authentication
    const signingResponse = await sign_message();

    // Get a temporary access token
    const accessToken = (
      await axios.post(
        `https://api.lighthouse.storage/api/auth/verify_signer`,
        {
          publicKey: signingResponse.address,
          signedMessage: signingResponse.signedMessage,
        }
      )
    ).data.accessToken;

    // Push file to lighthouse node
    try{
      setImageHash(await lighthouse.deploy(e, accessToken));
      setFiles(null);
    }catch(e) {
      console.log(e)
    } finally{
      console.log(imageHash)
    }
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */
  };

  // register for event
  const submit = (e) => {
    deploy(Files);
    mintNft({
      name: Name,
      metadata: {
        contact: ContactNumber,
        userAddress: UserAddress,
        image: `https://gateway.lighthouse.storage/ipfs/${imageHash.data.Hash}`
      },
      to: wallet_address,
    })
  }
 

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [file, setFile] = React.useState();

  return (
    <div className="modal">
      <button className="open" onClick={openModal}>
        Register
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div id="contact__1">
          <button className="cross" onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <h3>Profile</h3>
          <h4>Enter your details to complete registration!</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabIndex="1"
              required
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Contact Number"
              type="tel"
              tabIndex="2"
              required
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Enter your address"
              type="text"
              tabIndex="3"
              required
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <div className="file">
              <label className="lable-file" for="choose-file">
                Select Your Profile Photo
              </label>
              <input
                className="choose-file"
                id="choose-file"
                type="file"
                onChange={(e) =>{ 
                  
                  setFiles(e)
                  console.log(e);
                }}
              />
              <span>{Files?.target.value}</span>
              <img className="profile" src={file} height="100" whidth="100" />
            </div>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              onClick={submit}
            >
              Submit
            </button>
          </fieldset>
        </div>
      </Modal>
    </div>
  );

  }
export default UserModal;
