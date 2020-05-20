<template>
  <div>

    <section data-scroll-section class="section-page me">
      <div class="container">
            <div class="row loco-section" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
                <div class="col-12-sm col-7-sm col-start-2-md">
                    <h1 class="title-xxl">NOSSO <br> ESCRITÓRIO</h1>
                </div>
                <div class="col-10-sm col-7-md col-start-2-sm col-start-3-md">
                    <p class="text-xl2 text-upper">AJUDAMOS PESSOAS E EMPRESAS CRIATIVAS A NAVEGAREM PELO MUNDO DOS CONTRATOS, NEGOCIAÇÕES E LEIS. 
ASSESSORANDO PROJETOS E NEGÓCIOS EM ARTE, CULTURA, ENTRETENIMENTO E TECNOLOGIA.</p>
                </div>
            </div>
            <div class="section-small">
                <div class="row section-list-small">
                    <div class="col-10-sm col-4-md col-start-2-sm col-start-3-md loco-section" data-scroll data-scroll-class="loco-show">
                        <p>Nossos clientes são criativos, artistas e empreendedores, pessoas que desejam excelentes serviços jurídicos baseados 
                          em relacionamentos, sem o distanciamento frio e pouco atrativo do mundo jurídico. 
                          O nosso escritório oferece resultados de alta qualidade, confiáveis e oportunos, ao mesmo 
                          tempo em que mantém uma experiência personalizada com uma linguagem acolhedora e inclusiva.
                          Usamos nossa experiência para ajudar nossos clientes a alcançarem e terem sucesso. 
                          E estamos comprometidos em sermos honestos, receptivos, acessíveis, responsáveis e 
                          inovadores em tudo o que fazemos.</p>
                    </div>
                    <div class="col-10-sm col-4-md col-start-2-sm col-start-8-md loco-section" data-scroll data-scroll-class="loco-show">
                        <p>Nossas soluções jurídicas são tão exclusivas quanto nossos clientes e nos 
                          concentramos em ouvir atentamente para garantir que nossos serviços atendam às 
                          suas necessidades, para isso dedicamos um tempo para conhecer seus negócios, 
                          a fim de personalizar um plano que realmente proteja seus interesses. 
                          Estamos ativos nos estados de Santa Catarina e Paraná.</p>
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