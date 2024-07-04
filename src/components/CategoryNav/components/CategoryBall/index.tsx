import { Icon } from "@phosphor-icons/react";
import { CategoryBallContainer } from "./styles";

interface CategoryBallProps {
  icon: Icon;
  label: string;
}

export function CategoryBall({ icon: IconComponent, label }: CategoryBallProps) {
  return (
    <CategoryBallContainer>
      <IconComponent size={32} weight="fill" alt={label} />
    </CategoryBallContainer>
  )
}