import React, { useEffect } from 'react'

const Alert = ({alert,showAlert}) => {
  useEffect(() =>{
    const timeOut = setTimeout(() => {
      showAlert();
    },3000)
    return () => clearTimeout(timeOut)
  },[]);
  return (
    <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
  )
}

export default Alert
