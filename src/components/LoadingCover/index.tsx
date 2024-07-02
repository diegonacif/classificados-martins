import { BlinkBlur } from "react-loading-indicators";
import { LoadingCoverContainer } from "./styles";

export function LoadingCover() {
  return (
    <LoadingCoverContainer>
      <BlinkBlur color="#1494ff" size="medium" text="" textColor="" />
    </LoadingCoverContainer>
  )
}