import { useState } from "react";
import { OsztalyAdatok } from "./components/OsztalyAdatok";
import { OsztalyVezerlo } from "./components/OsztalyVezerlo";

function App() {
  const [jelenlevok, setJelenlevok] = useState<number>(24);
  const [hangulat, setHangulat] = useState<string>("Átlagos");

  function jelenletNovelese() {
    if (jelenlevok < 30) {
      setJelenlevok((elozoErtek) => elozoErtek + 1);
    }
  }

  function jelenletCsokkentese() {
    if (jelenlevok > 0) {
      setJelenlevok((elozoErtek) => elozoErtek - 1);
    }
  }

  function hangulatValtoztatas() {
    if (hangulat == "Átlagos") {
      setHangulat("Jó");
    }
    else if (hangulat == "Jó") {
      setHangulat("Kiváló");
    }
    else if (hangulat == "Kiváló") {
      setHangulat("Átlagos");
    }
  }

  return (
    <>
      <OsztalyAdatok jelenlevok={jelenlevok} hangulat={hangulat}></OsztalyAdatok>
      <OsztalyVezerlo jelenletNovelese={jelenletNovelese} jelenletCsokkentese={jelenletCsokkentese} hangulatValtoztatas={hangulatValtoztatas}></OsztalyVezerlo>
    </>
  )
}

export default App
