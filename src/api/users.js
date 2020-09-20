const express = require('express');

const router = express.Router();


// READ ALL
router.get('/', (req, res, next) => {
  res.json({
    message: 'ALL'
  })
})

// READ ONE
router.get('/:id', (req, res, next) => {
  res.json({
    message: 'ONE'
  })
})

// CREATE ONE
router.post('/', (req, res, next) => {
  res.json({
    message: 'CREATE'
  })
})

// UPDATE ONE
router.put('/:id', (req, res, next) => {
  res.json({
    message: 'UPDATE'
  })
})

// DELETE ONE
router.get('/', (req, res, next) => {
  res.json({
    message: 'DELETE'
  })
})

module.exports = router;