import { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, DefaultTheme } from 'styled-components/native'

export type BoxVariants = 'danger' | 'primary' | 'secondary' | 'success'

type Props = {
  variant?: BoxVariants
}

const getVariantStyles = (theme: DefaultTheme, variant: BoxVariants) => {
  const variantStyles: Record<BoxVariants, FlattenSimpleInterpolation> = {
    danger: css`
      background-color: ${theme.colors['red-light']};
      border-color: ${theme.colors['red-light']};
    `,
    primary: css`
      background-color: ${theme.colors['gray-600']};
      border-color: ${theme.colors['gray-600']};
    `,
    secondary: css`
      border-color: ${theme.colors['gray-500']};
    `,
    success: css`
      background-color: ${theme.colors['green-light']};
      border-color: ${theme.colors['green-light']};
    `,
  }

  return variantStyles[variant]
}

export const Container = styled.View<Props>`
  ${({ theme, variant = 'primary' }) => css`
    padding: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color: transparent;

    ${getVariantStyles(theme, variant)}
  `}
`
