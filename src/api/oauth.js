import { post } from 'axios'

// username: clientId, password: clientSecret
const username = process.env.VUE_APP_CLIENT_ID
const password = process.env.VUE_APP_CLIENT_SECRET

export default function() {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    auth: {
      username, password
    }
  }
  return post('https://eu.battle.net/oauth/token', body, config)
}
