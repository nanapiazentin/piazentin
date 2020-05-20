<template>
  <div>

    <section data-scroll-section class="section-page me">
      <div class="container">
            <div class="row loco-section section-bottom" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
                <div class="col-12-sm col-7-sm col-start-2-md">
                    <h1 class="title-xxl">TRABALHE <br> CONOSCO</h1>
                </div>
                <div class="col-10-sm col-8-md col-start-2-sm col-start-3-md">
                    <p class="text-xl2 text-upper">Como somos um escritório com habilidades jurídicas de nicho, contratamos regularmente consultores e advogados para trabalhar em projetos especiais. Sinta-se livre para enviar sua carta de apresentação e currículo para: <br> <br> <strong><a class="link" href="mailto:contato@nanasharapiazentin.com">contato@nanasharapiazentin.com</a></strong></p>
                </div>
            </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    layout: 'app',

    head() {
      return {
        titleTemplate: 'Piazentin Advogados',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },

          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: '' },
        ],
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      };
    },

        data() {
      return {
        lmS: null
      }
    },

    mounted() {
      this.lmS = new this.locomotiveScroll({
          el: document.querySelector("#loco-scroll"),
          smooth: true
      });

      this.lmS.on('scroll', function(obj){
          let scroll = obj["scroll"]["y"]
          let h = window.innerHeight
          let w = window.innerWidth
          var scrollPercent = (scroll / 13)
          
          document.getElementById("bullet").style.top = scrollPercent+"px"
      });

      this.startAnimations();
    },

    beforeDestroy() {
      console.log("destroy lms")
      this.lmS.destroy();
    },

    methods: {
      startAnimations: function(){
        document.getElementById("bullet").style.top = 0+"px"
      }
    }
    
  }
</script>