<template>
  <div>
    <nav id="here">
      <li>
        <router-link :to="{ name: 'Homepage' }">
          Accueil
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Gallery' }">Galerie</router-link>
        <ul>
          <li>
            <router-link :to="{ name: 'Gallery' }">
              Photos
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Gallery' }">
              Vidéos
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{ name: 'Sources' }">
          Sources
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">
          À propos
        </router-link>
      </li>
    </nav>
    <li>
      <router-link :to="{ name: 'Map' }">
        Map
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
