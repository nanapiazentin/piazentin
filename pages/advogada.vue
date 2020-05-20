<template>
  <div>
    <section data-scroll-section class="section-page me">
      <div class="pic pi-me pic-fl pic-fl__r pic-me" data-scroll data-scroll-speed="1.5">
          <div class="pic-item" data-scroll data-scroll-speed="-2">
              <img src="~/assets/img/nanashara-piazentin.jpg">
          </div>
      </div>
      <div class="container loco-section" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
          <div class="row">
              <div class="col-12-sm col-7-sm col-start-2-md">
                  <h1 class="title-xxl">NANASHARA <br> PIAZENTIN</h1>
              </div>
              <div class="col-10-sm col-4-md col-start-2-sm col-start-3-md">
                  <p class="text-xl2 text-upper">GRADUADA EM DIREITO E JORNALISMO. ATUALMENTE CURSA MESTRADO 
                    EM PROPRIEDADE INTELECTUAL NA FLACSO – ARGENTINA NO PROGRAMA DE DIREITO E BENS PÚBLICOS.</p>
              </div>
          </div>
          <div class="row section-small">
              <div class="col-10-sm col-4-md col-start-2-sm col-start-3-md">
                  <p>Há 10 anos presta assessoria jurídica a diversas empresas do ramo cultural, 
                    possuindo uma amplitude de conhecimento de toda a dinâmica das indústrias criativas, 
                    assessorando projetos, ações culturais e comerciais nas mais variadas áreas artísticas 
                    tais como: cinema, música, moda e fotografia. Possui sólidos conhecimentos nos segmentos 
                    que compõem as atividades da cultura e do entretenimento. É Conselheira Municipal de 
                    Políticas Culturais de Balneário Camboriú e representante suplente da Câmara Setorial de 
                    Audiovisual.

                    <br><br>

                    Seu foco de pesquisa e interesse passam por temas ligados à cultura, arte, acesso ao 
                    conhecimento, direitos autorais e tecnologia.
</p>
              </div>
              <div class="col-10-sm col-4-md col-start-2-sm col-start-8-md">
                <p>
                    É Vice-presidente da Comissão de Direito às Artes e Cultura da OAB/BC e Diretora 
                    Executiva da Cinemateca Catarinense ABD.SC. Feminista, esteve por anos como Conselheira 
                    Municipal dos Direitos da Mulher de Balneário Camboriú.

                    <br><br>

                    Gosta de cinema brasileiro e quando não está trabalhando, Nanashara provavelmente pode 
                    ser encontrada articulando um novo projeto, cortando e colando 
                    (saiba mais <a href="www.nanashara.tumblr.com" target="_blank">aqui</a> ), praticando ioga, ouvindo música e 
                    curtindo com seus dois filhos.
                </p>
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
          var scrollPercent = (scroll / 21)
          
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