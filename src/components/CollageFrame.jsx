import './CollageFrame.css';

const images = {
  baloons: new URL('../assets/collage/baloons.png', import.meta.url).href,
  beso: new URL('../assets/collage/beso.png', import.meta.url).href,
  bolaBoliche: new URL('../assets/collage/bolaBoliche.png', import.meta.url).href,
  cata1: new URL('../assets/collage/cata1.png', import.meta.url).href,
  cerezas: new URL('../assets/collage/cerezas.png', import.meta.url).href,
  donuts: new URL('../assets/collage/donuts.png', import.meta.url).href,
  espiral: new URL('../assets/collage/ESPIRAL1.png', import.meta.url).href,
  gato: new URL('../assets/collage/gato.png', import.meta.url).href,
  globo: new URL('../assets/collage/Globo.png', import.meta.url).href,
  manocopa: new URL('../assets/collage/manocopa.png', import.meta.url).href,
  megafono: new URL('../assets/collage/megafono.png', import.meta.url).href,
  party: new URL('../assets/collage/party.png', import.meta.url).href,
  tulipanes: new URL('../assets/collage/tulipanes.png', import.meta.url).href,
  bolaBoliche2: new URL('../assets/collage/bolaBoliche2.png', import.meta.url).href,
  cata2: new URL('../assets/collage/cata2.png', import.meta.url).href,
  drink: new URL('../assets/collage/drink.png', import.meta.url).href,
  drinkMano: new URL('../assets/collage/drinkMano.png', import.meta.url).href,
  drinkRosa: new URL('../assets/collage/drinkRosa.png', import.meta.url).href,
  flores: new URL('../assets/collage/flores.png', import.meta.url).href,
  gato2: new URL('../assets/collage/gato2.png', import.meta.url).href,
  globoCora: new URL('../assets/collage/globoCora.png', import.meta.url).href,
  margarita: new URL('../assets/collage/margarita.png', import.meta.url).href,
  parque: new URL('../assets/collage/parque.png', import.meta.url).href,
  perriglobo: new URL('../assets/collage/perriglobo.png', import.meta.url).href,
  torta: new URL('../assets/collage/torta.png', import.meta.url).href,
  tulipanes2: new URL('../assets/collage/tulipanes2.png', import.meta.url).href,
};

function CollageFrame() {
  return (
    <>
      {/* LEFT SIDE — 13 images */}
      <img src={images.baloons} alt="" className="ci ci-l1" />
      <img src={images.beso} alt="" className="ci ci-l2" />
      <img src={images.bolaBoliche} alt="" className="ci ci-l3" />
      <img src={images.cata1} alt="" className="ci ci-l4" />
      <img src={images.cerezas} alt="" className="ci ci-l5" />
      <img src={images.donuts} alt="" className="ci ci-l6" />
      <img src={images.espiral} alt="" className="ci ci-l7" />
      <img src={images.gato} alt="" className="ci ci-l8" />
      <img src={images.globo} alt="" className="ci ci-l9" />
      <img src={images.manocopa} alt="" className="ci ci-l10" />
      <img src={images.megafono} alt="" className="ci ci-l11" />
      <img src={images.party} alt="" className="ci ci-l12" />
      <img src={images.tulipanes} alt="" className="ci ci-l13" />

      {/* RIGHT SIDE — 13 images */}
      <img src={images.bolaBoliche2} alt="" className="ci ci-r1" />
      <img src={images.cata2} alt="" className="ci ci-r2" />
      <img src={images.drink} alt="" className="ci ci-r3" />
      <img src={images.drinkMano} alt="" className="ci ci-r4" />
      <img src={images.drinkRosa} alt="" className="ci ci-r5" />
      <img src={images.flores} alt="" className="ci ci-r6" />
      <img src={images.gato2} alt="" className="ci ci-r7" />
      <img src={images.globoCora} alt="" className="ci ci-r8" />
      <img src={images.margarita} alt="" className="ci ci-r9" />
      <img src={images.parque} alt="" className="ci ci-r10" />
      <img src={images.perriglobo} alt="" className="ci ci-r11" />
      <img src={images.torta} alt="" className="ci ci-r12" />
      <img src={images.tulipanes2} alt="" className="ci ci-r13" />
    </>
  );
}

export default CollageFrame;
