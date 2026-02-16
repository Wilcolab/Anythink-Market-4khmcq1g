/**
 * Express router for handling comment operations
 * @type {import('express').Router}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Creates a new comment in the database
 * @async
 * @route POST /
 * @param {Object} req.body - Request body
 * @param {string} req.body.text - The comment text content
 * @param {string} req.body.author - The author of the comment
 * @returns {Promise<void>} 201 status with the newly created comment object
 * @throws {Error} Returns 500 status with error message if creation fails
 */

/**
 * Deletes a comment by ID from the database
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The MongoDB ID of the comment to delete
 * @returns {Promise<void>} 204 No Content status on successful deletion
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
route.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
route.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;
    const newComment = new Comment({ text, author });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment" });
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});
