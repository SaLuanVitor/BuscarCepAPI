import styled from "styled-components";

export const Content = styled.section`
  border: solid black 2em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2em;
  align-items: center;
  margin: 0 auto;
  h1{
    margin-top: 4em;
  }
`
export const Form = styled.form`
  margin-top: 1em;
  input{
    height: 36px;
    border: solid black;
    border-radius: 2em;
    padding: 0.3em;
  }
  button{
    width: 5em;
    border-radius: 2em;
  }
  
  img{  
    width: 22px;
  }
`

export const InputBox = styled.div`
  display: flex;
`

export const BoxInfo = styled.div`
  border: solid black;
  border-radius: 2em;
  margin-top: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;

`