import express, {Request, Response, NextFunction} from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  const styles =
    'color: purple; line-height: 100vh; text-align: center; margin: 0; font-family: sans-serif;';
  res.send(
    `<body style="margin: 0;"><h1 style="${styles}">Welcome to Planet! 🪐</h1></body>`
  );
});

router.get('/todos', getTodos);
router.get('/todo/:id', getTodos);
router.post('/todo', createTodo);
router.put('/todo', updateTodo);
router.patch('/todo', updateTodo);
router.delete('/todo', deleteTodo);

router.get('/test', (req, res, next) => {
  console.log('TESTING!');
  res.send('TESTING!');
});

// export const routes = (req, res, next) => {
//   router.get('/', (req, res, next) => {
//     const styles =
//       'color: purple; line-height: 100vh; text-align: center; margin: 0; font-family: sans-serif;';
//     res.send(
//       `<body style="margin: 0;"><h1 style="${styles}">Welcome to Planet! 🪐</h1></body>`
//     );
//   });

//   router.get('/todos', getTodos);

//   router.get('/test', (req, res, next) => {
//     console.log("TESTING!");
//     res.send('TEST');
//   });
// };

export default router;
