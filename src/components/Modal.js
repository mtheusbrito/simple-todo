import React from "react";
// import { Container } from './styles';
import Card from './Card';
function Modal(props) { 

  function hideModal(e){
    if(e.target.id === "modal"){
      props.onHideModal();
    }
  }
  return (
    <div id="modal" onClick={hideModal} className={props.show ? 'modal': 'modal hide'} >
      <Card className="card-modal">{props.children}</Card>
    </div>
  );
}

export default Modal;
