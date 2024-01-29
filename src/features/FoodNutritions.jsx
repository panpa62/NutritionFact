export default function FoodNutrients({ foodNutrients }) {
  return foodNutrients.map((item) => (
    <div>
      <p>
        {item.name}
        <span></span> {item.amount}
        {item.unitName}
      </p>
    </div>
  ));
}
