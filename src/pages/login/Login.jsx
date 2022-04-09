
import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import meal from "../../assets/meal.svg";

const Login = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    //  1.method
    window.location.href = "/home";
    //2.method
    

  }
  return (
    <LoginContainer>
        <FormContainer>
          <StyledImg src={meal} />
          <Header>{"<Clarusway />"}Recipe</Header>
          <StyledForm onSubmit ={handleSubmit}>
            <StyledInput type ="text" placeholder ="username" required />
            <StyledInput type ="password" placeholder ="password" required />
            <StyledButton type="submit" >Login</StyledButton>




          </StyledForm>



        </FormContainer>

    </LoginContainer>
  )
}

export default Login