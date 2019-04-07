import React from 'react'

const Message = ({ name, username, message }) => (
  <div style={styles.container}>
    <div style={styles.titleContainer}>
      <div style={styles.name}>{name}</div>
      <div style={styles.username}>@{username}</div>
    </div>
    <p>{message}</p>
  </div>
)

const styles = {
  container: {
    border: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
    padding: 8
  },
  titleContainer: { display: 'flex', flexDirection: 'row' },
  name: { paddingRight: '8px', fontWeight: 'bold' },
  username: {
    fontWeight: 'bold',
    color: 'gray'
  }
}

export default Message
