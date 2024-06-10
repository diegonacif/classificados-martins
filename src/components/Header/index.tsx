import { SignIn } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/AuthGoogleProvider";
import { MenuButton } from "./components/MenuButton";

export function Header() {
  const { 
    handleGoogleSignIn, 
    userCredential,
  } = useContext(AuthGoogleContext);

  return (
    <HeaderContainer>
      <h1>Logo</h1>
      <div className="header-wrapper">
        {
          !userCredential ? (
            <SignIn size={32} onClick={() => handleGoogleSignIn()} />
          ) : (
            <MenuButton />
          )
        }
      </div>
    </HeaderContainer>
  )
}