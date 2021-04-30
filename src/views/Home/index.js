import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DashCard from '../../components/DashCard'

import * as S from './styles'

function Home() {





  return (

    <S.Container>
      <Header />
      <S.Title>
        <h1>LISTA</h1>
      </S.Title>
      <DashCard />

      <Footer />
    </S.Container >

  )
}

export default Home;
