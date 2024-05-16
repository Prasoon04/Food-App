import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = process.env.REACT_APP_API_KEY;

  // console.log(foodId);

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
    }
    fetchFood();
  }, []);

  return <div>food details {foodId}</div>;
}
