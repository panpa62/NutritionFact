export default function NutritionDetails({ foodNutrients }) {
  if (!foodNutrients) {
    return <p>No nutrient info is available</p>;
  }
  return foodNutrients.map((item, index) => (
    <div key={index}>
      <p>
        {item.name}
        <span></span> {item.amount}
        {item.unitName}
      </p>
    </div>
  ));
}
