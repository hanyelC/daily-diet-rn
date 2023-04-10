import { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, DefaultTheme } from 'styled-components/native'

export type ButtonVariants = 'primary' | 'secondary'

type Props = {
  isActive: boolean
  variant?: ButtonVariants
}

const getVariantStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants,
  isActive: boolean,
) => {
  const variantStyles: Record<ButtonVariants, FlattenSimpleInterpolation> = {
    primary: css`
      background-color: ${isActive
        ? theme.colors['gray-100']
        : theme.colors['gray-200']};
      border-color: ${isActive
        ? theme.colors['gray-100']
        : theme.colors['gray-200']};
    `,
    secondary: css`
      ${isActive &&
      css`
        background-color: ${theme.colors['gray-500']};
      `}
      border-color: ${theme.colors['gray-100']};
    `,
  }

  return variantStyles[variant]
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, variant = 'primary', isActive }) => css`
    flex-direction: row;
    gap: 12px;

    align-items: center;
    justify-content: center;

    padding: 16px 24px;
    border-radius: 6px;
    border-width: 1px;
    border-color: transparent;

    ${getVariantStyles(theme, variant, isActive)};
  `}
`
