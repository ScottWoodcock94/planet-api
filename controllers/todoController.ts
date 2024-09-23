import { readFile, writeFile } from 'fs';
import { Todo } from '../models/todo';
import { Request, Response, NextFunction } from 'express';

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  readFile(`./database/database.json`, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else {
      const todos: Todo[] = JSON.parse(data).todo;

      if (req.params.id) {
        console.log('Request Parameter:', req.params.id);

        const todo: Todo = todos.find(
          (todo) => todo.id === parseInt(req.params.id)
        );

        if (todo) res.status(200).send(todo);
        else res.status(404).send('The requested resource does not exist!');
      } else res.status(200).send(todos);
    }
  });
};

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  readFile(`./database/database.json`, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else {
      console.log('Data:\n\n', data);

      const database: { todo: []; user: [] } = JSON.parse(data); // Which type??? Array of Objects?
      const todos: Todo[] = database.todo;

      const newTodo: Todo = { id: todos.length + 1, ...req.body };
      console.log('New Todo:', newTodo);

      todos.push(newTodo);
      console.log('Database:\n\n', database);

      writeFile(
        `./database/database.json`,
        JSON.stringify(database),
        'utf-8',
        (err) => err && console.error(err)
      );

      res.status(201).send(todos.find((todo) => todo.id === newTodo.id));
    }
  });
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  readFile(`./database/database.json`, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else {
      console.log('Data:\n\n', data);

      let database: { todo: []; user: [] } = JSON.parse(data);
      const todos: Todo[] = database.todo;

      let updatedTodo: Todo = todos.find(
        (todo) => todo.id === parseInt(req.body.id)
      );

      if (updatedTodo) {
        const updatedTodoData: Todo = req.body;
        console.log('Updated Todo:', updatedTodoData);

        todos.splice(todos.indexOf(updatedTodo), 1, updatedTodoData);

        console.log('Updated Array:\n\n', todos);
      } else res.status(404).send('The requested resource does not exist!');

      console.log('Updated Database:\n\n', database);

      writeFile(
        `./database/database.json`,
        JSON.stringify(database),
        'utf-8',
        (err) => err && console.error(err)
      );

      res
        .status(200)
        .send(todos.find((todo) => todo.id === parseInt(req.body.id)));
    }
  });
};

export const deleteTodo = (req, res, next) => {
  readFile(`./database/database.json`, 'utf-8', (err, data) => {
    if (err) console.error(err);
    else {
      console.log('Data:\n\n', data);

      let database: { todo: []; user: [] } = JSON.parse(data);
      let todos: Todo[] = database.todo;

      let deletedTodo: Todo = todos.find(
        (todo) => todo.id === parseInt(req.body.id)
      );
      console.log('DELETED TODO: ', deletedTodo);

      if (deletedTodo) {
        todos.splice(todos.indexOf(deletedTodo), 1);

        console.log('Updated Database:\n\n', database);

        writeFile(
          `./database/database.json`,
          JSON.stringify(database),
          'utf-8',
          (err) => err && console.error(err)
        );

        !todos.find((todo) => todo.id === parseInt(req.body)) &&
          res.status(200).send(req.body);
      } else res.status(404).send('The requested resource does not exist!');
    }
  });
};
