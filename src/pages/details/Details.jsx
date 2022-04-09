import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer, DetailPart, HeaderContainer, OtherPart } from './DetailsStyles';
import dietSvg from "../../assets/diet.svg";

const Details = ({recipe1}) => {
  const location=useLocation();
  const recipe =location.state.recipe1
  // console.log(recipe)





  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src ={dietSvg} alt = ""/>
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
        <>Nutrients</>
          <p>
            {recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}

        </OtherPart>
      </DetailPart>



    </DetailContainer>
  )
}

export default Details