import { CenterTextContainer, HeaderParaText, HeaderText, HeaderTextContainer, HeaderTextGreen, MainHeroContainer } from "./hero.style";

export function Hero() {
    return (<>
        <MainHeroContainer>
            <CenterTextContainer>
                <HeaderTextContainer>
                    <HeaderText>Sample Test<br /></HeaderText>
                    <HeaderTextGreen>Demo</HeaderTextGreen>
                </HeaderTextContainer>
                <HeaderParaText>This is another one</HeaderParaText>
            </CenterTextContainer>

            <div className='pt-20 px-10'>
                <div className="border rounded bg-yellow-200 py-10 px-10 text-center shadow-lg sm:text-left">
                    <h1 className='text-black font-bold'>Hello this is something</h1>
                </div>
            </div>
        </MainHeroContainer>
    </>
    )
}