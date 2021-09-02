import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbarcomp from '../components/Navbar'

import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <Navbarcomp/>
      <Form/>
    </>
  )
}
