import tw from "tailwind-styled-components";
import styled from "styled-components";
import { HeroSizing } from "../Hero/hero.style";

export const NavDimen = tw(HeroSizing)`
    relative
    pt-6
    px-4
    
    sm:px-6

    lg:px-8

`
export const NavContainer = tw.nav`
    relative
    flex
    items-center
    justify-between

    sm:h-10

    lg:justify-start
`
export const NavItemContainer = tw.div`
    flex
    items-center
    flex-grow
    flex-shrink-0
    lg:flex-grow-0
`
export const NavItems = tw.div`
    flex
    items-center
    justify-between
    w-full

    md:w-auto
`
export const LogoContainer = tw.p`
    text-2xl    
    md:text-3xl
    text-yellow-300
    font-bold
`