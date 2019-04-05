import React from 'react'

const Input = props => (
  <div style={styles.container}>
    <label style={styles.label}>{props.name}</label>
    <input style={styles.input} {...props} />
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    with: '100%',
    padding: '8px',
    borderWidth: 1,
    borderColor: 'black'
  },
  label: {
    paddingLeft: '0px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  }
}

export default Input
