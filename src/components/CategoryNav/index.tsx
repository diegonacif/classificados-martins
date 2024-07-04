import { CategoryNavContainer } from "./styles";
import { CategoryBall } from "./components/CategoryBall";
import { categories } from "../../constants/categories";

export function CategoryNav() {
  return (
    <CategoryNavContainer>
      {categories.map((category, index) => (
        <CategoryBall key={index} icon={category.icon} label={category.label} />
      ))}
    </CategoryNavContainer>
  )
}