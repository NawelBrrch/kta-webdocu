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
            <ul class="list__item list__item--menu">
              <li
                class="list__item"
                @click="closeTopBarPanel"
                v-if="isPanelOpen"
              >
                <router-link :to="{ name: 'Gallery' }">
                  Photos
                </router-link>
              </li>
              <li
                class="list__item"
                @click="closeTopBarPanel"
                v-if="isPanelOpen"
              >
                <router-link :to="{ name: 'Gallery' }">
                  Vidéos
                </router-link>
              </li>
            </ul>
          </li>
          <li class="list__item" @click="closeTopBarPanel" v-if="isPanelOpen">
            <router-link :to="{ name: 'Sources' }">
              Sources
            </router-link>
          </li>
          <li class="list__item" @click="closeTopBarPanel" v-if="isPanelOpen">
            <router-link :to="{ name: 'About' }">
              À propos
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
  height: 10px;

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
    height: 48px;
    z-index: 2;
    width: 100%;

    &--list {
      display: flex;
      padding: 0 15%;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
}

.list__item {
  @include menu-style;

  a {
    text-decoration: none;
    color: white;
  }

  &--menu {
    display: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 0.4s ease-in 0s;
}
</style>
