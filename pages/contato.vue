<template>
  <div>
    
    <section data-scroll-section class="section-page me">
      <div class="container">
            <div class="row loco-section section-bottom" data-scroll data-scroll-class="loco-show" data-scroll-offset="80">
                <div class="col-12-sm col-7-sm col-start-2-md">
                    <h1 class="title-xxl">FALE <br> CONOSCO</h1>
                </div>
                <div class="col-10-sm col-8-md col-start-2-sm col-start-3-md">
                    <p class="text-xl2 text-upper">Você também pode <a class="link-underline" href="mailto:contato@nanasharapiazentin.com">Enviar um e-mail</a> ou <a class="link-underline" href="#">uma mensagem no whatsapp</a>.</p>
                </div>

                <div class="col-10-sm col-8-md col-start-2-sm col-start-3-md">
                     <form @submit="sendMail" action="/contato" method="post" id="form" class="form" ref="formHTML">
                        <div class="form-group">
                            <div class="form-label">
                                <label for="name">NOME COMPLETO *</label>
                            </div>
                            <div class="form-input">
                                <input type="text" name="name" id="name">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-label">
                                <label for="email">EMAIL *</label>
                            </div>
                            <div class="form-input">
                                <input type="text" name="email" id="email">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-label">
                                <label for="subject">ASSUNTO *</label>
                            </div>
                            <div class="form-input">
                                <input type="text" name="subject" id="subject">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-label">
                                <label for="phone">TELEFONE *</label>
                            </div>
                            <div class="form-input">
                                <input type="text" name="phone" id="phone">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-label">
                                <label for="name">MENSAGEM *</label>
                            </div>
                            <div class="form-input">
                                <textarea name="message" id="message" cols="30" rows="8"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-label"></div>
                            <div class="form-input">
                                <input class="btn btn-radius" type="submit" value="ENVIAR">
                            </div>
                        </div>
                    </form>
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
        lmS: null,
        modal: false
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
      sendMail: function(e){
        var fname = document.getElementById("name").value
        var femail = document.getElementById("email").value
        var fsubject = document.getElementById("subject").value
        var fphone = document.getElementById("phone").value
        var fmessage = document.getElementById("message").value
        
        this.$axios.post('https://nanasharapiazentin.com/envio.php',
        { name: fname, email: femail, subject: fsubject, phone: fphone, message: fmessage})
        .then((response) => {
            document.getElementById("form").reset();
        })
        .catch(function (error) {
            console.log(name)
            document.getElementById("form").reset();
        })
        e.preventDefault();
      },

      startAnimations: function(){
        document.getElementById("bullet").style.top = 0+"px"
      }
    }
    
  }
</script>