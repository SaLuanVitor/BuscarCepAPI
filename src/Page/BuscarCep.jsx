import React from "react"
import axios from "axios"
import { useState } from "react"
import * as S from "./StyledBucarCep.js"
import search from "../Assets/search.png"
import clear from "../Assets/clear.png"

export default function App() {

  const [input, setInput] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [cep, setCep] = useState('')
  const [complemento, setComplemento] = useState('')
  const [exist, setExist] = useState(false)

  let linkAPI = `https://viacep.com.br/ws/${input}/json/`

  function getApi() {
    axios.get(linkAPI).then((r) => {
      console.log(r)
      setCep(r.data.cep)
      setRua(r.data.logradouro)
      setBairro(r.data.bairro)
      setCidade(r.data.localidade)
      setUf(r.data.uf)
      setComplemento(r.data.complemento)
      setInput('')
      setExist(true)
    })
  }
  function clearApi() {
    setBairro('')
    setCep('')
    setCidade('')
    setUf('')
    setRua('')
    setInput('')
    setComplemento('')
    setExist(false)
  }

  return (
    <S.Content>
      <h1>BUSCADOR DE CEP</h1>
      <S.Form onSubmit={e => e.preventDefault()}>
        <S.InputBox>
          <input value={input} placeholder="Digite seu CEP" onChange={e => setInput(e.target.value)} />
          <button onClick={() => { getApi() }}><img src={search} alt="search icon" /></button>
          <button onClick={() => { clearApi() }}><img src={clear} alt="clear icon" /></button>
        </S.InputBox>
        {exist && <S.BoxInfo>
          <p>CEP: {cep}</p>
          <h2>Cidade: {cidade}</h2>
          <h2>UF: {uf}</h2>
          <p>Logradouro: {rua}</p>
          <p>Bairro: {bairro}</p>
        </S.BoxInfo>}
      </S.Form>
    </S.Content>
  )
}