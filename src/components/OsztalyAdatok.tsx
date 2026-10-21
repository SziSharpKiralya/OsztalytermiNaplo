type OsztalyAdatokProps = {
  jelenlevok: number;
  hangulat: string;
};

export function OsztalyAdatok({jelenlevok, hangulat}:OsztalyAdatokProps) {

  return (
    <>
      <div className="">
        <p>Aktuális létszám: <strong>{jelenlevok}</strong></p>
        <p>Jelenlegi hangulat <strong>{hangulat}</strong></p>
      </div>
    </>
  ) 
}
