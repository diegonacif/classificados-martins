import { useState, useRef, useContext } from 'react'

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';
import { AuthGoogleContext } from '../../../../contexts/AuthGoogleProvider';
import { MenuButtonContainer } from './styles';

export const MenuButton = () => {

  const { 
    userPhotoUrl,
    handleGoogleSignOut
  } = useContext(AuthGoogleContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const transitions = useTransition(isMenuOpen, {
    from: { x: 10, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -10, opacity: 0 },
    config: {duration: 200},
  });
  
  return (
    <MenuButtonContainer 
      onClick={() => handleMenuOpen()}
      ref={refContainer} // Outside Click (Reference)
    > 
      <div className="user-btn">
        <img src={userPhotoUrl} alt="" />
      </div>

      {/* Conditional Rendering with Transition */}
      {
        transitions(
          (styles, item) => item &&
            <animated.div className="menu-modal" style={styles}>
              <div className="menu-item">
                <span>Meus Anúncios</span>
              </div>
              <hr />
              <div className="menu-item">
                <span onClick={() => handleGoogleSignOut()}>Deslogar</span>
              </div>
            </animated.div>
        )
      }
    </MenuButtonContainer>
  )
}