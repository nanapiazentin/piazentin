<template>
  <div class="container">
    <div class="logo">
      <img src="~/assets/img/logo.svg">
    </div>
    <img id="signature" src="~/assets/img/PiaZentin.svg">
    <div class="page">
      <h1>serviços jurídicos especializados <br> na área da cultura, entretenimento <br> e tecnologia.</h1>
      <div class="social">
        <a href="https://www.instagram.com/nanashara.g/" target="_blank">INSTAGRAM</a>
        <a href="https://www.facebook.com/nanashara.piazentingoncalves" target="_blank">FACEBOOK</a>
        <a href="https://wa.me/554791331041" target="_blank">WHATSAPP</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Piazentin - Advocacia Especializada',
        meta: [
          { hid: 'description', name: 'description', content: 'Piazentin - Advocacia Especializada' }
        ]
      }
    }
  }
</script>

<style>
  #signature{
    left: 0;
    right: 0;
    margin: auto;
    opacity: .03;
    position: fixed;
    top: 25%;
    width: 80%;
    z-index: -1;
  }
  .container{
    box-sizing: border-box;
    height: 100vh;
    padding: 32px;
    width: 80%;
  }
  .page{
    margin-left: 92px;
    position: relative;
    text-transform: uppercase;
    top: 20%;
  }
  h1{
    font-size: 3.2vw;
    font-weight: 500;
    line-height: 1.3em;
    margin-top: 56px;
  }
  .social{
    border-top: solid 2px #0F0F0F;
    display: inline-block;
    margin-top: 12px;
    padding-top: 20px;
  }
  .social a{
    color: #0F0F0F;
    display: inline-block;
    font-size: 18px;
    margin-right: 32px;
    text-decoration: none;
  }
  .social a:last-child{
    margin-right: 0;
  }
  @media screen and (max-width: 769px){
    .container{
      width: 100%;
    }
    .logo{
      max-width: 72px;
    }
    .logo img{
      height: auto;
      width: 100%;
    }
    .page{
      margin-left: 72px;
      top: 0;
    }
    h1{
      font-size: 5vw;
    }
    .social a{
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
</style>