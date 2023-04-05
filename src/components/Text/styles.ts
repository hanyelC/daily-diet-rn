import { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, DefaultTheme } from 'styled-components/native'

type TextSizes = 'md' | 'sm' | 'xs'

type Props = {
  size?: TextSizes
}

const getSizeStyles = (theme: DefaultTheme, size: TextSizes) => {
  const sizeStyles: Record<TextSizes, FlattenSimpleInterpolation> = {
    md: css`
      font-size: 16px;
      line-height: 20.8px;
    `,
    sm: css`
      font-size: 14px;
      line-height: 18.2px;
    `,
    xs: css`
      font-size: 12px;
      line-height: 15.6px;
      font-family: ${theme.fonts.bold};
    `,
  }

  return sizeStyles[size]
}

export const Container = styled.Text<Props>`
  ${({ theme, size = 'md' }) => css`
    color: ${theme.colors['gray-100']};

    font-family: ${theme.fonts.regular};

    ${getSizeStyles(theme, size)};
  `};
`
