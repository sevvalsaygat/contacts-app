import React, { useState } from 'react'

function Form({ contacts, setContacts }) {

  const [contactForm, setContactForm] = useState({ fullname: "", phonenumber: "" });

  const onChangeInput = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Full Name <br />
      <input name='fullname' placeholder='ad soyad giriniz' value={contactForm.fullname} onChange={onChangeInput} />
      <br />
      <br />
      Phone Number <br />
      <input type="tel" name='phonenumber' placeholder='telefon numranizi giriniz' value={contactForm.phonenumber} onChange={onChangeInput} />
      <br />
      {contactForm.fullname} {contactForm.phonenumber}
      <br />
      <button onClick={
        () => {
          setContacts([...contacts, contactForm])
          setContactForm({ fullname: "", phonenumber: "" })
        }
      }>Ekle</button>
    </div>
  )
}

export default Form