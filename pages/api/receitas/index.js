import { receitas } from "../../../data";

export default function handler(_req, res) {
    res.status(200).json(receitas)
}
