import tw from "tailwind-styled-components";
import styled from "styled-components";

const MainContainer = tw.div`
    relative    
    overflow-hidden
`

export const HeroSizing = tw(MainContainer)`
    max-w-7xl
    mx-auto    
`
const SubSizing = tw(HeroSizing)`
    relative    
    pb-8

    sm:pb-16

    md:pb-20

    lg-w-full
    lg:pb-28

    xl:pb:32    
`
export const MainHeroContainer = tw(SubSizing)`
    mt-10
    mx-auto
    max-w-7xl
    px-4

    sm:mt-12
    sm:px-6

    md:mt-16

    lg:mt-20
    lg:px-8

    xl:mt-28
`

export const CenterTextContainer = tw.div`
    text-center
`
export const HeaderTextContainer = tw.h1`
    text-4xl
    tracking-tight
    font-extrabold
    text-yellow-50
    
    sm:text-5xl

    md:text-6xl
`
export const HeaderText = tw.span`
    block

    xl:inline
`
export const HeaderTextGreen = tw(HeaderText)`
  text-yellow-300
`
export const HeaderParaText = tw.p`
    mt-3
    text-base
    text-gray-200

    sm:mt-5
    sm:text-lg
    sm:max-w-xl
    sm:mx-auto

    md:mt-5
    md:text-xl
`

