import { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, DefaultTheme } from 'styled-components/native'

type TextSizes = 'lg' | 'md' | 'sm' | 'xs'

type Props = {
  size?: TextSizes
}

const getSizeStyles = (theme: DefaultTheme, size: TextSizes) => {
  const sizeStyles: Record<TextSizes, FlattenSimpleInterpolation> = {
    lg: css`
      font-size: 32px;
      line-height: 41.6px;
    `,
    md: css`
      font-size: 24px;
      line-height: 31.2px;
    `,
    sm: css`
      font-size: 18px;
      line-height: 23.4px;
    `,
    xs: css`
      font-size: 14px;
      line-height: 18.2px;
    `,
  }

  return sizeStyles[size]
}

export const Container = styled.Text<Props>`
  ${({ theme, size = 'md' }) => css`
    color: ${theme.colors['gray-100']};

    font-family: ${theme.fonts.bold};

    ${getSizeStyles(theme, size)};
  `};
`
