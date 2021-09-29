// const express = require('express');
// const joi = require('joi');
// const app = express();
// app.use(express.json());

// const books = [
//      { title: 'Americanna', author: 'Chimanmanda', id:1},
//      { title: 'Things Fall Apart', author: 'Chinua Achebe', id:2},
//      { title: 'Death and the Kings horsemen', author: 'Wole Soyinka', id:3},
// ]

// app.get('/', (req, res) => {
//      res.send('welcome to node, michael Adepoju');
// });

// app.get('/api/books', (req, res) => {
//      res.send(books);
// });

// app.get('/api/books/:id', (req, res)=>{
//      const book = books.find(c => c.id === parseInt(req.params.id));

//      if (!book) {
//           res.status(404).send('The book you are looking for not available, check back later')
//      }else{
//           res.send(book);
//      }
// });

// // create a boook

// app.post('/api/books', (req, res) => {
//      const {error} = ValidateBook(req.body);
//      if (error) {
//           res.status(400).send(error.details[0].message)
//           return;
//      }

//      const book = {
//           id: books.length +1,
//           title: req.body.title,
//           author: req.body.author
//      };

//      books.push(book);
//      res.send(book);
// });

// // update Request Handler
// app.put('/api/books/:id', (req, res) =>{
//      const book = books.find(c => c.id === parseInt(req.params.id));
//      if (!book) {
//           res.status(404).send('Not found');
//           return;
//      } else {
//           const { error} = validateBook(req.body);
//           if (error) {
//                res.status(400).send(error.details[0].message);
//                return;
//           }

//           book.title = req.body.title;
//           res.send(book);
//      }
// });



// app.listen(3000, () => console.log('Active on port 300'));