import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.scss';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EnviarMail = ({ closeModal }) => {
  const refForm = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceId = 'service_v51eubi';
    const templateId = 'template_hl6mew5';
    const apikey = 'pYgGfqlNJz6gYsyun';

    emailjs
      .sendForm(serviceId, templateId, form, apikey)
      .then((result) => {
        setShowSuccessMessage(true);
        form.reset();
      })
      .catch((e) => {
        setShowErrorMessage(true);
      });
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const closeErrorMessage = () => {
    setShowErrorMessage(false);
  };

  return (
    <>
      <div className="container_de_todo_contacto">
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={closeModal}
        />
        <div className="container_contact">
          <div className="Titulo_form_contact">
            <h1>¿TE GUSTARIA PONERTE EN CONTACTO?</h1>
          </div>

          <form ref={refForm} action="" onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="username">N O M B R E</label>
              <input name="username" id="username" type="text" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="email">E M A I L</label>
              <input name="email" id="email" type="email" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="phone">T E L E F O N O</label>
              <input name="phone" id="phone" type="text" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="message">M E N S A J E</label>
              <textarea maxLength="800" name="message" id="message" placeholder="Cuéntanos un poco más" cols="110" rows="5" required />
            </fieldset>

            <button type="submit">Enviar</button>
          </form>

          {showSuccessMessage && (
            <div className="modal_success-modal">
              <div className="modal-content_contact">
                <h2>Mensaje enviado con éxito</h2>
                <button onClick={closeSuccessMessage}>Cerrar</button>
              </div>
            </div>
          )}

          {showErrorMessage && (
            <div className="modal_error-modal">
              <div className="modal-content_contact">
                <h2>Error al enviar el mensaje</h2>
                <button onClick={closeErrorMessage}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnviarMail;
