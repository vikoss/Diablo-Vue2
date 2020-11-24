<template>
  <footer class="footer-bar mt-5">
    <div class="text-center">
      <p class="text-muted">Powered by</p>
      <ul class="list-inline">
        <li class="list-inline-item mx-2" v-for="(icon, id) in icons" :key="id">
          <a :href="icon.href" target="_blank" :title="icon.href">
            <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/>
          </a>
        </li>
      </ul>
    </div>

    <hr class="my-5">

    <div class="row">
      <div class="col-sm-6 mb-sm-0 mb-5">
        <div>
          <b-nav small align="start">
            <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item href="https://github.com/vikoss/Diablo-Vue2" target="_blank">Github</b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="col-sm-6">
        <p class="text-muted m-0 pt-1 pl-3 text-left text-sm-right">
          <small>
            Made by
            <a href="https://github.com/vikoss" target="_blank">Vikoss</a>
          </small>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        {
          classes: [ 'fab', 'vuejs' ],
          color: '#4fc08d',
          href: 'https://vue.js.org/'
        },
        {
          classes: [ 'fab', 'bootstrap' ],
          color: '#7952b3',
          href: 'https://bootstrap-vue.js.org/'
        },
        {
          classes: [ 'fab', 'battle-net' ],
          href: 'https://develop.battle.net/documentation/diablo-3/community-apis'
        },
        {
          classes: [ 'fab', 'github' ],
          color: '#e4e4e4',
          href: 'https://github.com/vikoss'
        },
        {
          classes: [ 'fab', 'font-awesome' ],
          color: '#0e95ff',
          href: 'https://fontawesome.com/'
        }
      ]
    }
  }
}
</script>