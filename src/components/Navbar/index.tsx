import { LogoContainer, NavContainer, NavDimen, NavItemContainer, NavItems } from "./navbar.style";

export function Navbar() {


    return (        
    <NavDimen>
        <NavContainer>
            <NavItemContainer>
                <NavItems>
                    <a href="/">
                                
                                <LogoContainer>Eclipse</LogoContainer>
                    </a>
                </NavItems>
            </NavItemContainer>
        </NavContainer>
    </NavDimen>
    )
}