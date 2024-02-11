import { useGetIngredientQuery } from "../store/nutritionSlice";

export default function SearchResult(search) {
  const { data, isLoading } = useGetIngredientQuery(search);
  console.log(data);
  return (
    <div>
      Search Result
      <p>{search}</p>
    </div>
  );
}
