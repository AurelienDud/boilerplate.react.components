import React, { FunctionComponent } from 'react'
import { css } from 'goober'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Styles
 */
const sharedStyles = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`
const primaryStyles = css`
  color: white;
  background-color: #1ea7fd;
`
const secondaryStyles = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`
const smallStyles = css`
  font-size: 12px;
  padding: 10px 16px;
`
const mediumStyles = css`
  font-size: 14px;
  padding: 11px 20px;
`
const largeStyles = css`
  font-size: 16px;
  padding: 12px 24px;
`

function getStyles (primary:boolean, size:string) {
  const stylesList:string[] = [sharedStyles]

  // primary
  if (primary) {
    stylesList.push(primaryStyles)
  } else {
    stylesList.push(secondaryStyles)
  }

  // size
  switch (size) {
    case "small":
      stylesList.push(smallStyles)
      break
    case "large":
      stylesList.push(largeStyles)
      break
    case "medium":
    default:
      stylesList.push(mediumStyles)
      break
  }

  return stylesList.join(' ')
}

/**
 * Primary UI component for user interaction
 */
const Button:FunctionComponent<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={getStyles(primary, size)}
      style={{ backgroundColor }}
      {...rest}
    >
      {label}
    </button>
  )
}


export default Button