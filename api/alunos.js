// api/alunos.js
import { Aluno } from '../../path/to/your/models'; // ajuste o caminho conforme necessário

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const alunos = await Aluno.findAll();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
