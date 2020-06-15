<template>
  <div class="sources">
    <section class="sources__categories">
      <h2>Nos sources</h2>
      <h3>Sources photographiques</h3>
      <div class="sources__liens">
        <p>
          ZUL-PHOTO :
          <a href="https://www.zul-photo.fr/">www.zul-photo.fr</a>
        </p>
        <p>
          FREED EXPLORE :
          <a href="https://freedexplore.com/">freedexplore.com / </a>
          <a href="https://www.instagram.com/freed_o_gram/?igshid=khf137amg0x7"
            >Instagram de Freed</a
          >
        </p>
        <p>
          HARRY :
          <a href="https://www.instagram.com/harry.mh/?igshid=19rz9r7nrbd4f"
            >Instagram de Harry</a
          >
        </p>
        <p>
          TALPA :
          <a href="https://www.flickr.com/photos/155503087@N08/"
            >Flickr de Talpa</a
          >
        </p>
        <p>
          GASPARD DUVAL :
          <a href="https://www.facebook.com/photographie.souterraine/"
            >Facebook de Gaspard Duval</a
          >
        </p>
        <p>
          BERTRAND ROBION :
          <a href="https://www.flickr.com/photos/bertrandrobion/"
            >Flickr de Bertrand Robion</a
          >
        </p>
        <p>
          KARMA :
          <a href="https://is-exploration.ovh/">is-exploration.ovh</a>
        </p>
      </div>

      <h3>Sources littéraires</h3>
      <div class="sources__liens">
        <p>Catacombes. Histoire du Paris souterrain - Gilles Thomas</p>
      </div>

      <h3>Sites internet</h3>
      <div class="sources__liens">
        <p>
          <a href="https://pierres-info.fr/paris_sous_pierre/index.html"
            >www.pierres-info.fr</a
          >
        </p>
        <p>
          <a href="https://fr.wikipedia.org/wiki/Philibert_Aspairt"
            >www.wikipedia.fr/Philibert_Aspairt</a
          >
        </p>
        <p>
          <a
            href="http://www.parismuseesjuniors.paris.fr/sites/default/files/article/media/catacombes_dossier_pedagogique_catacombes.pdf_interactif-ilovepdf-compressed.pdf"
            >Dossier édagogique des Catacombes de Paris</a
          >
        </p>
      </div>

      <h3>Vidéos</h3>
      <div class="sources__liens">
        <p>
          <a href="https://www.dailymotion.com/video/x3n8w7x"
            >Au coeur des soirées illégales des catacombes de Paris</a
          >
        </p>
        <p>
          <a href="https://www.dailymotion.com/embed/video/x5744tk"
            >Les Catacombes de Paris</a
          >
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=dau8OFU_7wQ&list=PLJNN6drWAsqgmmRTwSjdelWZivlIwAM4U&index=2&t=303s"
            >Traces</a
          >
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=bq1WS1CVB1w&list=PLJNN6drWAsqgmmRTwSjdelWZivlIwAM4U&index=38&t=0s"
            >C'est pas sorcier - France Souterraine</a
          >
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=ygzbYhdHKV0&list=PLJNN6drWAsqgmmRTwSjdelWZivlIwAM4U&index=35"
            >Découverte de la plus ancienne carrière de Paris</a
          >
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=WJAPgM0n5Ss&list=PLJNN6drWAsqgmmRTwSjdelWZivlIwAM4U&index=30"
            >Paris mystères (Macabre et catacombes) Documentaire</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=3gJmWaPAKWE"
            >Underground Kontrol</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=JeDEWk35W_M"
            >360 video of the Catacombs</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=fnyPuH5LFbI"
            >Lost and alone in the Paris Catabombs</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=TLOtzt9VjZg"
            >Je navigue sous Paris</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=uVDSYeYSZEE&t=257s"
            >Catacombs Paris - chatière allant vers K.C.P</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=lUXLBRSNCaY"
            >Catacombes - Une société sous les pavés</a
          >
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=9fKG3rzuLnc"
            >Catacombes interdites, 9h sous terre</a
          >
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: "Sources" };
</script>

<style lang="scss" scoped>
.sources {
  background-image: url("../assets/images/backgroundParcheminNoir.png");
  background-repeat: repeat;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 80px;
}

h2 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 20px;
  color: $white;
}

.sources__liens {
  margin-bottom: 50px;
}

p {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: $lightbrown;
}
</style>
