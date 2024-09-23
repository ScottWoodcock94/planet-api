import { readFile } from 'fs';

export const getUsers = (req, res, next) => {
  if (req.params.id) {
    console.log(req.params.id);
  } else
    readFile(`./database/database.json`, 'utf-8', (err, data) => {
      if (err) console.error(err);
      else {
        console.log('Data:\n\n', data);
        const users = JSON.parse(data).todo;
        res.send(users);
      }
    });
};
