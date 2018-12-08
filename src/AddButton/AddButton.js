import React from 'react';
import addButton from './add-button.svg';
import addedButton from './added-button.svg';
import './AddButton.css'

const AddButton = (props) => (
    <img className= "button" onClick={() => props.onButtonClick()} alt="Favorite button" src={props.added ? addedButton : addButton}></img>
);

export default AddButton