<template>
  <div>

    <section data-scroll-section class="section-page me">
      <div class="container">
          <div class="row loco-section" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
              <div class="col-12-sm col-7-sm col-start-2-md">
                  <h1 class="title-xxl">PALESTRAS</h1>
              </div>
          </div>
          <div class="section-small">
              <div class="row">
                  <div class="col-10-sm col-8-md col-start-2-sm col-start-3-md loco-section" data-scroll data-scroll-class="loco-show">

                  </div>
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
          var scrollPercent = (scroll / 18)
          
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