import React from 'react';
import Modal from 'react-modal';

// *ngIf de React = > {props.selectedOption && <p></p>}
const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    >
        <h3>I'm your modal title</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
    </Modal>
);

export default OptionModal;