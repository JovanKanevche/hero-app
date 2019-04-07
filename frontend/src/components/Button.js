import React from 'react'

const Button = props => (
  <button
    type="button"
    {...props}
    style={{
      ...styles.button,
      ...props.style
    }}
  />
)

const styles = {
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  }
}

export default Button
