import { css } from "styled-components"

enum breakPointsUp {
    small = '27.25rem',
    medium = '40rem',
    large = '64rem',
    extraLarge = '87.5rem'
}

enum breakPointsDown {
    small = '27.23rem',
    extraLarge = '87.4374rem',
    large = '64.9375rem',
    medium = '39.9375rem'
}

export const BreakPointsUp = (
    screenWidth: 'extraLarge' | 'large' | 'medium' | 'small',
    values: string
) => css`@media screen and (min-width: ${breakPointsUp[`${screenWidth}`]}) ${values}`


export const BreakPointsDown = (
    screenWidth: 'extraLarge' | 'large' | 'medium' | 'small',
    values: string
) => css`@media screen and (max-width:  ${breakPointsDown[`${screenWidth}`]}) ${values}`