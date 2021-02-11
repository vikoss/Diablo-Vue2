import { get } from 'axios'
import store from '../store/index'


export function getApiAccount({region, account}) {
    // {region} is one of us | eu | kr | tw
    console.log(region)
    const locale = region.toLowerCase()
    const apiURL = `https://${locale}.api.blizzard.com/d3/profile/${account}/`

    const params = {
        access_token: store.state.oauth.token,
        locale,
    }

    return get(apiURL, { params })
}

export function getApiHero({ region, account, heroid }) {
  const locale = region.toLowerCase()
  const apiURL = `https://${locale}.api.blizzard.com/d3/profile/${account}/hero/${heroid}`
  const params = {
    access_token: store.state.oauth.token,
    locale,
  }

  return get(apiURL, { params })
}

export function getApiDetailedHeroItems({ region, account, heroid }) {
  const locale = region.toLowerCase()
  const apiURL = `https://${locale}.api.blizzard.com/d3/profile/${account}/hero/${heroid}/items`
  const params = {
    access_token: store.state.oauth.token,
    locale,
  }

  return get(apiURL, { params })
}