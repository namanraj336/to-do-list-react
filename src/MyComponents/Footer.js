import React from 'react'
import { Container } from 'react-bootstrap';
const myStyles = {
  height:"10vh",
  position:"relative",
  width:"100%",
  marginTop:"30vh"
}
export const Footer = () => {
  return (
    <div>
    <footer className='bg-dark text-light text-center py-3'>
        Copyright &copy; MyTodoList.com
        <p>A website created by Naman Raj of RCCIIT</p>
    </footer>
    </div>
  )
}
