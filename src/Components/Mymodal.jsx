import React, { useState } from 'react'
import Modal from 'react-modal'
import { MdOutlineClose } from "react-icons/md";
import '../Styles/modal.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        borderColor: "var(--bg-black1)",
        backgroundColor: 'var(--bg-black1)',
        boxShadow: '0px 0px 20px 0px var(--bg-black1)',
    },
};
Modal.defaultStyles.overlay.backdropFilter = "blur(2px)"
Modal.defaultStyles.overlay.backgroundColor = "transparent"
function Mymodal({ open, setisopen }) {

    return (
        <div>
            <Modal isOpen={open}
            closeTimeoutMS={500}
            ariaHideApp={false}
                style={customStyles}
                contentLabel="Example Modal">
                <div className='modal-main'>
                    <div className='top-content'>
                        <div className='top-content-left'>
                            Submission successful
                        </div>
                        <div className='top-content-right'>
                            <MdOutlineClose onClick={() => setisopen(false)} size={24} color="var(--fg-green)" />
                        </div>
                    </div>
                    <div className='main-content-modal'>
                        <div>💖</div>

                    </div>
                    <div className='text-7'>This really means a lot to me</div>
                </div>
            </Modal>
        </div>
    )
}

export default Mymodal
