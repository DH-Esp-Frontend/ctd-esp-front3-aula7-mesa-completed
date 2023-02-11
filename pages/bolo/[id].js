import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "..";



const Bolo = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/receitas/${query.id}`,
    fetcher
  );

  // Status da requição para o usuário
  if (error) return <div>Falha ao carregar</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <>
      <Link href="/">Home</Link>
      <div>
        <h2>{data.title}</h2>
        <Image src={data.image} width={300} height={150} />
        <h3>Description</h3>
        <p>{data.description}</p>
        <h3>Texto de preparo</h3>
        <p>{data.text}</p>
      </div>
    </>
  );
};

export default Bolo;
