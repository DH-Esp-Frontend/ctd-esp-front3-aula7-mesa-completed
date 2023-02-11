import { receitas } from "../../../data";

export default function handler(req, res) {
    const { id } = req.query

    const findRecipe = receitas.find(receita => receita.id === id)

    if(findRecipe) res.status(200).json(findRecipe)
    else res.status(400).json({message: "Please check the id again"})
  }