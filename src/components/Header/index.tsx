import { SignIn } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/AuthGoogleProvider";
import { MenuButton } from "./components/MenuButton";
import logoImg from "../../assets/classi-logo.png";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <h2>ClassiFácil</h2>
        </Link>
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