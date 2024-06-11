import { SignIn } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/AuthGoogleProvider";
import { MenuButton } from "./components/MenuButton";
import logoImg from "../../assets/classi-logo.png";

export function Header() {
  const { 
    handleGoogleSignIn, 
    userCredential,
  } = useContext(AuthGoogleContext);

  return (
    <HeaderContainer>
      <div />
      <div className="header-wrapper">
        <img src={logoImg} id="classi-logo" alt="classifacil logo" />
        <h2>ClassiFácil</h2>
      </div>
      <div className="header-menu-wrapper">
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