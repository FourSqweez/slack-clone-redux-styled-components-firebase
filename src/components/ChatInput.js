import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import firebase from 'firebase'

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!channelId) {
      return false
    }
    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Four Sq',
      userImage:
        'https://scontent.fnak1-1.fna.fbcdn.net/v/t1.0-9/142329626_2349282661884094_1479215446098487803_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGo2QZFJufkTJQplLetSqq4QfWfrzLJZeNB9Z-vMsll41ZWSkB3l36SkfeSvb3z_NfIcOGctZqm2zPIyt8sH2bH&_nc_ohc=7bAZztgA_mUAX_yNRjy&_nc_ht=scontent.fnak1-1.fna&oh=b521ab926196de71fe9b21219f3ee270&oe=606C81B1',
    })

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    })
    
    setInput('')
  }
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none !important;
    }
  }
`
