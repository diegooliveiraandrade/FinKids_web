import React, { useState, useEffect } from 'react'
import * as S from './styles'

import api from '../../services/api'




function DashCard() {

  const [list, setList] = useState([])

  useEffect(() => {

    async function loadSpentsTotal() {

      const response = await api.get(`/show/${localStorage.getItem('id')}`)

      const data = response.data.spent

      const desires = data.filter((gastos) => {
        return gastos.desire === false

      })
      //

      const myValues = desires.map(valor => valor.value)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const total = (myValues.reduce(reducer))
      setList(total)

    }



    loadSpentsTotal()
  }, [list])

  return (

    <S.Container>
      <S.TopCard>
        <h2>Total de gastos</h2>
        <span>R$ {list} </span>


      </S.TopCard>
      <S.BottomCard>
        <strong></strong>


      </S.BottomCard>
    </S.Container>

  )
}

export default DashCard;
