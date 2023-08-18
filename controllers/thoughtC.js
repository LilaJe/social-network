const { Thought, React, User } = require('../models');
const { Types } = require('mongoose');

const thoughtControl = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().sort({ createdAt: -1 });
        } catch (err) {
            res.status(400).json(err);
        }
    },

    const: getThoughtById = async ({ params }, res) => {
        try {
            const thought = await Thought.findOne({ _id: params.id });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            } else {
                res.json(thought);
            } try  {
                res.status(400).json(err);
            }
         catch (err) {
            res.status(400).json(err);
        }
    },
    
    
    async createThought({ body }, req, res) {
        try {
            const thought = await Thought.create(body);
            res.status(200).json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    },

     async updateThought({ params, body }, req, res) {
        try { 
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            }); 
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            } else {
                res.json(thought);
            } catch (err) {
                res.status(400).json(err);
            }
        },

        const deleteThought({ params }, req, res) {
            try {
                const thought = await Thought.findByIdAndDelete(req.params.id);
                if (!thought) {
                    res.status(200).json(thought);
            catch (err) {
                        res.status(404).json(err);
                    }
                },
            },
            
            const addReaction (req, res) {
                try {
                    const thought = await Thought.findByIdAndUpdate(
                        { _id: req.params.thoughtId },
                        { $push: { reactions: body } },
                        { new: true }
                    
                    );
                    if (!thought) {
                        res.status(404).json({ message: 'No thought found with this id!' });
                        return;
                    } else {
                        res.json(thought);
                    }
                } catch (err) {
                    res.status(400).json(err);
                }
                
                const deleteReaction(req, res) {
                    try {
                        const thought = await Thought.findByIdAndUpdate(
                            { _id: req.params.thoughtId },
                            { $pull: { reactions: { reactionId: req.params.reactionId } } },
                            { new: true }
                        );
                        if (!thought) {
                            res.status(404).json({ message: 'No thought found with this id!' });
                            return;
                        };
                    } catch (err) {
                        res.status(400).json(err);
                    }
                }
                

                thoughtControl;
            
                module.exports = thoughtControl;
