import styled from "styled-components";
import { H2 } from "../../style/typography/typography";
import { colors } from "../../style/abstracts/variables";
import { mediaDown } from "../../style/abstracts/breakpoints";

export const BrandsHolder = styled.div`
    width: 100%;
    padding: 50px 0 100px;
    background-color: ${colors.midGray};
    @media ${mediaDown.sm} {
        padding-bottom: 50px;
    }
`

export const BrandsItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const BrandImageHolder = styled.div`
    height: 90px;
    flex: 25%;
    max-width: 90px;
    padding: 20px;
    background-color: ${colors.white};
    border-radius: 15px;
`

export const BrandsTitle = styled(H2)`
    color: ${colors.darkGray};
    margin-bottom: 50px;
    text-align: center;
`