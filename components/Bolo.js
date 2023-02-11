import Link from "next/link";

const Bolo = ({receita}) => {
  return (
      <Link href={`/bolo/${receita.id}`} >
        <article>
          <h2>
            {receita.title}
          </h2>
          <p>{receita.description}</p>
        </article>
      </Link>
  );
};

export default Bolo;
