type OsztalyVezerloProps = {
  jelenletNovelese: () => void;
  jelenletCsokkentese: () => void;
  hangulatValtoztatas: () => void;
};

export function OsztalyVezerlo({jelenletNovelese, jelenletCsokkentese, hangulatValtoztatas}: OsztalyVezerloProps) {

  return (
    <>
    <div>
      <button onClick={jelenletNovelese}>Növel</button>
      <button onClick={jelenletCsokkentese}>Csökkent</button>
      <button onClick={hangulatValtoztatas}>Hangulat</button>
    </div>
    </>
  )
}
