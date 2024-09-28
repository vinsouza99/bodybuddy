import express from "express";
import {
  getRoutineExercises,
  getRoutineExercise,
  createRoutineExercise,
  updateRoutineExercise,
  deleteRoutineExercise,
} from "../controllers/routineExerciseController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RoutineExercise:
 *       type: object
 *       required: none
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the RoutineExercise
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the RoutineExercise was created
 *         routine_id:
 *           type: string
 *           description: The routine that has this exercise
 *         exercise_id:
 *           type: string
 *           description: The related exercise
 *         order:
 *           type: integer
 *           description: The order where this exercise should appear on the routine
 *         sets:
 *           type: integer
 *           description: The number of sets of this exercise
 *         reps:
 *           type: integer
 *           description: The number of reps in each set
 *         duration:
 *           type: integer
 *           description: The duration of the full set+reps in seconds
 */

/**
 * @swagger
 * /RoutineExercises:
 *   get:
 *     summary: Returns a list of all RoutineExercises
 *     tags: [RoutineExercises]
 *     responses:
 *       200:
 *         description: A list of RoutineExercises
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RoutineExercise'
 */
router.get("/", getRoutineExercises);

/**
 * @swagger
 * /RoutineExercises/{id}:
 *   get:
 *     summary: Get a specific RoutineExercise by ID
 *     tags: [RoutineExercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the RoutineExercise
 *     responses:
 *       200:
 *         description: The RoutineExercise details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoutineExercise'
 *       404:
 *         description: RoutineExercise not found
 */
router.get("/:id", getRoutineExercise);

/**
 * @swagger
 * /RoutineExercises:
 *   post:
 *     summary: Create a new RoutineExercise
 *     tags: [RoutineExercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoutineExercise'
 *     responses:
 *       201:
 *         description: The RoutineExercise was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoutineExercise'
 *       500:
 *         description: Server error
 */
router.post("/", createRoutineExercise);

/**
 * @swagger
 * /RoutineExercises/{id}:
 *   put:
 *     summary: Update an existing RoutineExercise by ID
 *     tags: [RoutineExercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the RoutineExercise
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoutineExercise'
 *     responses:
 *       200:
 *         description: The RoutineExercise was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RoutineExercise'
 *       404:
 *         description: RoutineExercise not found
 *       500:
 *         description: Server error
 */
router.put("/:id", updateRoutineExercise);

/**
 * @swagger
 * /RoutineExercises/{id}:
 *   delete:
 *     summary: Delete an RoutineExercise by ID
 *     tags: [RoutineExercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the RoutineExercise
 *     responses:
 *       200:
 *         description: RoutineExercise was successfully deleted
 *       404:
 *         description: RoutineExercise not found
 */
router.delete("/:id", deleteRoutineExercise);

export default router;
