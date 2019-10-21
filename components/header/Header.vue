<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 style="font-size: 20px !important; color: black; font-weight: bold">Ecommerce Celulares</h1>
        </nuxt-link>

<!-- menu for mobile BURGER -->
        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

<!-- Search bar has it own function -->
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
        </div>

        <!-- Social media with tooltips -->
        <div class="navbar-end">
            <a href="https://docs.google.com/document/d/16mG_u8KgYAeb8i0dKFWwCW4qgxH7Hzc3bLm-W6D6tQ0/edit?usp=sharing" class="navbar-item" target="_blank">
              Sistemas Similares
            </a>
          <div class="navbar-item social">
            <a href="https://pt-br.facebook.com/" class="icon" :title="facebookTooltip">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/login?lang=pt" class="icon" :title="twitterTooltip">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/?hl=pt-br" class="icon" :title="instagramTooltip">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://br.linkedin.com/" class="icon" :title="linkedinTooltip">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmMenu from '../menu/Menu';
  import VmSearch from '../search/Search';

  export default {
    name: 'VmHeader',

// tooltips for social media icons
    data () {
      return {
        linkedinTooltip: 'Siga-nos no Linkedin',
        facebookTooltip: 'Siga-nos no Facebook',
        twitterTooltip: 'Siga-nos no Twitter',
        instagramTooltip: 'Siga-nos no Instagram',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmMenu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    background-position: 40% 60%;
    background-size: 175px;
    width: 175px;
    height: 50px;
  }
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
</style>
