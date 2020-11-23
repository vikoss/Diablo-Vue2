import { post } from 'axios'

// username: clientId, password: clientSecret
const username = 'e925efa0446c4cde99d77691b08baa84'
const password = 'oM4UVA5hzkoxh82jT9g2tptUPd54fHNp'
const region = 'eu'
const apiURL = `https://${region}.battle.net/oauth/token`


export function getToken() {
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
  return post(apiURL, body, config)
}
