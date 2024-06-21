import { Link } from "react-router-dom";
import { NewAdButtonContainer } from "./styles";

export function NewAdButton() {
  return (
    <Link to="/createAd">
      <NewAdButtonContainer>
        <h4>new ad button</h4>
      </NewAdButtonContainer>
    </Link>
  )
}