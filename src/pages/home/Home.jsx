
import axios from 'axios'
import React, {useState} from 'react'
import Header from "../../components/header/Header"

const APP_ID = "2e834ba2"
const APP_KEY = "f88c75a4871768c361395adbec04fa05"

const Home = () => {
  const [query, setQuery] =useState("");
  const  [food, setFood] = useState();

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack","Teatime"];
  const [meal, setMeal] =useState(mealTypes[0].toLowerCase());


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


  const getData = async ()=>{
    if (query){
      const result = await axios.get(url);
      setFood(result.data.hits);
    
    } else{
      console.log("please fill the form");
    }    
     
  }


  return (
    <div>
      <Header setQuery ={setQuery}
      getData ={getData}
      meaTypes = {mealTypes}
      setMeal = {setMeal}
      />





    </div>
  )
}

export default Home