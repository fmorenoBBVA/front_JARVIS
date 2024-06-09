<template>
  <div class="modal">
    <div @click="cleanAndCloseModal" class="side-modal-bg" ></div>
    <section class="side-modal side-modal-navbar slide-left">
      <div class="side-modal__body">
        <nav class="admin-layout__menu">
          <div class="admin-layout__link-container">
            <h2 style="margin-left:56px;">Menú</h2>
          </div>
          <div class="admin-layout__menu-items">
            <div class="admin-layout__link-container" >
              <router-link to="/">
              <i class="pi pi-discord" style="font-size: 1.5rem"></i>
              Jarvis
              </router-link>
            </div>
          </div>
          <div style="text-align:center;width:inherit">
          <p style="color:white;">Jarvis Able Challenge</p>
          </div>
        </nav>
      </div>
      
    </section>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    
  },
  methods: {
    cleanAndCloseModal (event) {
      this.$store.commit('setGlobalNavBar', !this.$store.state.globalNavBar)
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';


.admin-layout {
  transition: opacity 0.5s ease;

  &__menu {
    background-color: $nav-color;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 85px 0;
    overflow: auto;
    z-index: 1;
  }

  &__menu-items {
    border-bottom: 1px solid hsla(0,0%,100%,.5);
    margin: 0px 50px;
    padding: 0px 20px;
    width: 80%;
  }

  &__link-container {
    width: 100%;
    min-height: remv(48);
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 18px 5px;

    a {
      line-height: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      color: $white-color;

      img {
        width: 25px;
      }
    }
    h2 {
      color: $white-color;
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 22px;
      margin-left: 70px;
    }

    &--active {
      background-color: $color-link;
    }
  }

  &__pages {
    width: calc(100% - 262px);
    background-color: $white-color;
    float: right;
  }
}

.slide-left {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slide-left {
  0% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
