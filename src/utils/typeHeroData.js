export default function HeroData(hero, time) {
  const slug = (hero.charAt(0).toUpperCase() + hero.slice(1)).replace('-', ' ')
  this.hero = slug
  this.time = time
  this.slug = hero
}