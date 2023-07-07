import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.scss';
import Footer from "../../components/Footer"

const Contacto = () => {
  const refForm = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceId = 'service_3iko0wu';
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
        <div className="container_contact">
          <div className="Titulo_form_contact">
            <h1>¿Te gustaría ponerte en contacto?</h1>
          </div>

          <form ref={refForm} action="" onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="">Nombre</label>
              <input name="username" type="text" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="" name="email">
                Email
              </label>
              <input name="email" id="email" type="email" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="" name="phone">
                Teléfono
              </label>
              <input name="phone" id="" type="text" placeholder="" required />
            </fieldset>

            <fieldset>
              <label htmlFor="" name="message">
                Mensaje
              </label>
              <textarea maxLength="800" name="message" id="" type="text" placeholder="Cuéntanos un poco más" cols="30" rows="10" required />
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

      <Footer />
    </>
  );
};

export default Contacto;