<template>
    <section id = "idSpinnerGlobal" class="spinnerGlobal">
        <div class="spinnerGlobal__background">
          <div class="spinnerGlobal__body">
              <div class="spinnerGlobal__header">
                <img src='../assets/img/Spinner_Lila_wheel.gif' alt="not result found">
              </div>

              <p class="spinnerGlobal__body__title">{{ notResultsFoundData.titleMesg }}</p>
              <p class="spinnerGlobal__body__subtitle">{{ notResultsFoundData.subTitleMesg }}</p>
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


.spinnerGlobal {
    position: absolute;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: opacity 1s ease;
    z-index: 9999;
  
  &__background {
    background-color: #FFFFFF;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    width:100%;
    height:100%;
    z-index: -1;
  }
  
  &__header {
    img {
      width: 150px;
    }
  }

  &__body {
    z-index: 9999;
    margin: auto;

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
