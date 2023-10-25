import { currencyFormatter } from "../util/formatting"
import { Button } from "../UI/Button"
export const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} atl={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.destription}</p>
        </div>
        <p className="meal-item-actions">
          <Button>Act to cart</Button>
        </p>
      </article>
    </li>
  )
}
