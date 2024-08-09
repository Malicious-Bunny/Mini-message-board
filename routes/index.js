
const { Router } = require('express');
const router = Router();

//static files

const Messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
      text: "Good Morning!",
        user: "Betty",
        added: new Date()
    },
    {
      text: "Good Evening!",
        user: "Diana",
        added: new Date()
    }
  ];
  
 
  
  router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: Messages });
  });
  router.get('/new', (req, res) => {
    res.render('form', { title: 'Mini Messageboard' });
  });
  router.get('/message/:author', (req, res) => {
    const author = req.params.author;
    const message = Messages.filter(msg => msg.user === author);
    res.render('ViewMsg', { title: `MessageL ${author}`, messages: message});
  });



  router.post('/new', (req, res) => {
    const newMsg = {
        text: req.body.message,
        user: req.body.name,
        added: new Date()
        };

        Messages.push(newMsg);
        res.redirect('/');
  });

module.exports = router;