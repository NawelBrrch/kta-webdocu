<template>
  <div class="burgerMenu">
    <div
      class="burgerMenu__backdrop"
      @click="closeTopBarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="burgerMenu__panel">
        <ul class="burgerMenu__panel--list">
          <li class="list__item" @click="closeTopBarPanel" v-if="isPanelOpen">
            <router-link :to="{ name: 'Homepage' }">
              Accueil
            </router-link>
          </li>
          <li class="list__item" @click="closeTopBarPanel" v-if="isPanelOpen">
            <router-link :to="{ name: 'Gallery' }">Galerie</router-link>
          </li>
          <li class="list__item" @click="closeTopBarPanel" v-if="isPanelOpen">
            <router-link :to="{ name: 'Sources' }">
              Sources
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/javaScript/store.js";

export default {
  name: "BurgerMenuToBar",
  methods: {
    closeTopBarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.burgerMenu {
  width: 100%;

  &__backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  &__panel {
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    height: 57px;
    z-index: 2;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(5, 5, 5, 0.5) 39.03%,
      rgba(5, 5, 5, 0.2) 63.23%,
      rgba(26, 26, 26, 0) 105.55%,
      rgba(26, 26, 26, 0) 105.56%
    );

    @include tablet-portrait {
      height: 93px;
    }

    &--list {
      display: flex;
      padding: 0 15%;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      @include tablet-portrait {
        padding: 0 20%;
      }

      @include desktop {
        padding: 0 25%;
      }
    }
  }
}

.list__item {
  @include menu-style;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    transition: all 0.3s linear;
    filter: drop-shadow(0px 0px 5px $white);
  }

  &--menu {
    display: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 0.4s ease-in 0s;
}
</style>
