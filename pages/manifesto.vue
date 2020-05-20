<template>
  <div>

    <section data-scroll-section class="section-page me">
      <div class="container">
            <div class="row loco-section" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
                <div class="col-12-sm col-7-sm col-start-2-md">
                    <h1 class="title-xxl">MANIFESTO</h1>
                </div>
            </div>
            <div class="section-small">
                <div class="row">
                    <div class="col-10-sm col-4-md col-start-2-sm col-start-3-md loco-section" data-scroll data-scroll-class="loco-show">
                        <p>Acreditamos e lutamos por espaços igualitários, acreditamos na força e honestidade das redes
                        sustentáveis. Acreditamos em uma sociedade onde as práticas locais são preservadas e
                        celebradas, enquanto as identidades globais estão se fundindo para uma nova consciência.
                        <br>
                        Estamos trabalhando para essa evolução, trazendo as pessoas para novas formas de
                        relacionamento com a arte e criação. Buscando diminuir a desigualdade social através do
                        acesso e compartilhamento de conhecimento. <br>
                        Acreditamos na simplicidade e potência das palavras de Aaron Swartz: “se somarmos muitos
                        de nós, não vamos apenas enviar uma forte mensagem de oposição à privatização do
                        conhecimento - vamos transformar essa privatização em algo do passado. ”</p>
                    </div>
                    <div class="col-10-sm col-4-md col-start-2-sm col-start-8-md loco-section" data-scroll data-scroll-class="loco-show">
                        <p>Assim, nosso trabalho, desde e-books, artigos, passando pelo design e programação 
                          do site que pode ser acessado no <a class="text-link" href="#" target="_blank">GitHub</a>, é
                        compartilhado sob uma licença Creative Commons, tornando-o disponível para todos,
                        reconhecendo o fato de que somos apenas pontes e que não estamos de forma alguma
                        criando a partir do zero. É uma pequena contribuição que oferecemos aos que virão depois e
                        também uma maneira de dizer obrigada aos que vieram antes e nos possibilitaram estar aqui.
                        Pensar e criar.</p>
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