<template>
  <nav class="navBar">
    <img
      class="burgerMenu__open"
      src="../assets/icons/burgerMenu.svg"
      alt="close the menu"
    />
    <ul class="burgerMenu">
      <img src="../assets/icons/burgerMenu-cross.svg" alt="close the menu" />
      <li class="burgerMenu__list">
        <router-link :to="{ name: 'Homepage' }">
          Accueil
        </router-link>
      </li>
      <li class="burgerMenu__list">
        <router-link :to="{ name: 'Gallery' }">Galerie</router-link>
        <ul class="burgerMenu__list burgerMenu__list--menu">
          <li class="burgerMenu__list">
            <router-link :to="{ name: 'Gallery' }">
              Photos
            </router-link>
          </li>
          <li class="burgerMenu__list">
            <router-link :to="{ name: 'Gallery' }">
              Vidéos
            </router-link>
          </li>
        </ul>
      </li>
      <li class="burgerMenu__list">
        <router-link :to="{ name: 'Sources' }">
          Sources
        </router-link>
      </li>
      <li class="burgerMenu__list">
        <router-link :to="{ name: 'About' }">
          À propos
        </router-link>
      </li>
    </ul>
    <router-link :to="{ name: 'Map' }">
      <img class="mapMenu" src="../assets/icons/burgerMenu.svg" alt="map" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  list-style: none;
  width: 100%;
  height: 48px;

  @include h-style;

  a {
    text-decoration: none;
    color: white;
  }
}

.burgerMenu {
  display: flex;
  display: none;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  background: center / cover no-repeat url("../assets/images/menu-bg.jpg");
  padding: 0 30px;

  &__open {
    margin-left: 20px;
  }

  &__list {
    &--menu {
      display: none;
    }
  }
}

.mapMenu {
  margin-right: 20px;
}
</style>
