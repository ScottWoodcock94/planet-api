import { describe, it, expect } from 'vitest';
import { Request, Response, NextFunction, response } from 'express';
// import { getTodos, createTodo } from '../controllers/todoController';
import { getTodos, createTodo } from '../controllers/todoController.js';
import { Todo } from '../models/todo.js';

describe('Todo Controller – createTodo', () => {
  it('Should return 201 response code.', () => {
    const req = {
      body: JSON.stringify({
        id: 9,
        title: 'Go to the dentist again.',
        status: 'In-progress',
        description: null,
        userId: 1,
        createdAt: '2024-09-20 12:52:49',
        updatedAt: null,
      }),
    };

    const res = {
      statusCode: 201,
      todoTitle: 'Go to the dentist.',
      json: function (data: Todo) {
        this.todoTitle = data.title;
      },
      send: function (str: string) {
        return str;
      },
      status: function (code: number) {
        this.statusCode = code;
        return this;
      },
    };

    // createTodo(req as Request, res as unknown as Response, () => {}, database).then(
    createTodo(req as Request, res as unknown as Response, () => {}).then(
      () => {
        expect(res.statusCode).to.be.equal(201);
        expect(res.todoTitle).to.be.equal('Go to the dentist.');
      }
    );
  });
});
