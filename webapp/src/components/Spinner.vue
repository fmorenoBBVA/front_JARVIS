<template>
    <section id = "idSpinner" class="spinner">
        <div class="spinner__background">
          <div class="spinner__body">
              <div class="spinner__header">
                <img src='../assets/img/Spinner_White_64.gif' alt="not result found">
              </div>

              <p class="spinner__body__title">{{ notResultsFoundData.titleMesg }}</p>
              <p class="spinner__body__subtitle">{{ notResultsFoundData.subTitleMesg }}</p>
          </div>
        </div>
    </section>
</template>
<script>
export default {
  props: {
    notResultsFoundData: {
      type: Object,
      default () {
        return {
          titleMesg: 'Cargando datos',
          subTitleMesg: 'El proceso puede tardar unos segundos'
        }
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">


.spinner {
    position: absolute;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: opacity 1s ease;
    z-index: 9999;
  
  &__background {
    background-color: #FFFFFF;
    padding: 24px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
    z-index: -1;
  }
  
  &__header {
    img {
      width: 107px;
    }
  }

  &__body {
    z-index: 9999;
    margin:12%;

    &__title {
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 36px;
      line-height: 40px;
    }

    &__subtitle {
      font-weight: 350;
      font-size: 22px;
      line-height: 32px;
    }
  }
}
</style>
