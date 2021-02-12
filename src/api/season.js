import { get } from 'axios'
import store from '@/store'

export default function(region) {
  const params = {
    access_token: store.state.oauth.token
  }
  return get(`https://${region}.api.blizzard.com/data/d3/season/`, { params })
}