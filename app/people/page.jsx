import Peoplelist from "../components/peoplelist";

export default function People() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <h1 className="font-serif grow-0 text7xl"></h1>
      <section className="grow">
        <Peoplelist />
      </section>
    </div>

  );
}