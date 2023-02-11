import useSWR from "swr";
import Bolo from "../components/Bolo";

// Exemplo da utilização do SWR, mas você pode utilizar fetch, axios...
export const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Home = () => {
    const { data, error } = useSWR(
      () => `/api/receitas`,
      fetcher)

    // Status da requição para o usuário
    if (error) return <div>Falha ao carregar</div>;
    if (!data) return <div>Carregando...</div>;
      console.log(data)
    return (
      <>
       { data?.map(receita => <Bolo receita={receita} />)}
      </>
    )
};

export default Home;
