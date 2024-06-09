<template>
    <NavBar v-if="globalNavBar" />
    <header v-if="this.$store.state.globalUser.emailVerified">
        <div class="row">
          <router-link to="/">
            <img src='../assets/images/bbva-logo.svg' alt="not result found" style="width:98px;margin-top:10px;">
          </router-link>
          <div class="icon-menu" >
            <a @click="toggleNavBar" v-if="globalNavBar"><h2>X Cerrar</h2></a>
            <a @click="toggleNavBar" v-if="!globalNavBar"><img src="../assets/img/icon-menu.svg"/></a>
          </div>
        </div>
    </header>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },
    props: {

    },
    data () {
      return {
      }
    },
    created(){
    },
    computed: {
      globalNavBar () {
        return this.$store.state.globalNavBar;
      }
    },
    methods: {
      toggleNavBar () {
        this.$store.commit('setGlobalNavBar', !this.$store.state.globalNavBar)
      }
    }
  }
</script>


<style lang="scss">
@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

.jarvis-logo {
  width: 180px;
  height: 56px;
  vertical-align: middle;
  float: right;
}

header {
  background-color: $nav-color;
  color: $text-color;
  width: 100%;
  padding: 0px 15px;

  .row {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  
  .navbar-header {
    a {
      color: $white-color;
    }
  }

  .navbar-header-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 30px;
  }

  .icon-menu {
    z-index: 1;
    
    a {
      color:$white-color;
    }

    img {
      width: 40px;
    }
  }

  @media (hover: hover) {
    a:hover {
      color: var(--primary-active-color);
    }
    i:hover {
      color: var(--primary-active-color);
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
