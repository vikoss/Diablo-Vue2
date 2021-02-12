import { get } from 'axios'
import store from '../store/index'

// Region is one of | us | eu | kr | tw |

export function getApiAccount({region, account}) {
  const apiURL = `https://${region}.api.blizzard.com/d3/profile/${account}/`
  const params = {
    access_token: store.state.oauth.token,
    locale: region,
  }

  return get(apiURL, { params })
}

export function getApiHero({ region, account, heroid }) {
  const apiURL = `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroid}`
  const params = {
    access_token: store.state.oauth.token,
    locale: region,
  }

  return get(apiURL, { params })
}

export function getApiDetailedHeroItems({ region, account, heroid }) {
  const apiURL = `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroid}/items`
  const params = {
    access_token: store.state.oauth.token,
    locale: region,
  }

  return get(apiURL, { params })
}