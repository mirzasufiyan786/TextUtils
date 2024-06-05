import React from 'react'

export default function Alert(props) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

  return (
     props.alert &&   <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capitalizeFirstLetter(props.alert.type)}</strong> : {props.alert.msg}
</div>
   
  )
}
