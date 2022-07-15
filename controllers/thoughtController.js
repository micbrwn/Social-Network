const { Thought, User } = require('../models');

module.exports = {
    getThought(req, res) {
        Thought.find()
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
      // Get a single user
      getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      // create a new user
      createThought(req, res) {
        Thought.create(req.body)
          .then((user) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
      // Delete a user and associated apps
      deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then(() => res.json({ message: 'User and associated apps deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
    
      updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body)
          .then(() => res.json({ message: 'User and associated apps deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
      addReaction(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => {
          const thoughtArray = thought.reaction
        })
        .catch((err) => res.status(500).json(err));
      }
}