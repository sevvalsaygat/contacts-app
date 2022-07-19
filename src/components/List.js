import React from 'react'

function List({ contacts }) {
  return (
    <div>
      {
        contacts.map((contact, index) => {
          return (
            <div key={index}>
              {index + 1}-) {contact.fullname} {contact.phonenumber}
            </div>
          )
        })
      }
    </div>
  )
}

export default List