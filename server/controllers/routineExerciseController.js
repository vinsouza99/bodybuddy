import RoutineExercise from "../models/RoutineExercise.js";

export const getRoutineExercises = async (req, res) => {
  try {
    const routineExercises = await RoutineExercise.findAll();
    res.status(200).json({
      status: "200",
      message: "Success",
      data: routineExercises,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500",
      message: "Internal Server Error",
    });
  }
};

export const getRoutineExercise = async (req, res) => {
  try {
    const routineExercise = await RoutineExercise.findByPk(req.params.id);
    if (!routineExercise) {
      return res.status(404).json({
        status: "404",
        message: "Routine Exercise not found",
      });
    }
    res.status(200).json({
      status: "200",
      message: "Success",
      data: routineExercise,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500",
      message: "Internal Server Error",
    });
  }
};

export const createRoutineExercise = async (req, res) => {
  try {
    const { exercise_id, routine_id, reps, sets, order, duration } = req.body;
    const newRoutineExercise = await RoutineExercise.create({
      exercise_id,
      routine_id,
      reps,
      sets,
      order,
      duration,
    });
    res.status(201).json({
      status: "201",
      message: "Routine Exercise created successfully",
      data: newRoutineExercise,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500",
      message: "Internal Server Error",
    });
  }
};

export const updateRoutineExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const routineExercise = await RoutineExercise.findByPk(id);
    if (!routineExercise) {
      return res.status(404).json({
        status: "404",
        message: "RoutineExercise not found",
      });
    }

    await routineExercise.update(updatedData);
    res.status(200).json({
      status: "200",
      message: "RoutineExercise updated successfully",
      data: routineExercise,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500",
      message: "Internal Server Error",
    });
  }
};

export const deleteRoutineExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const routineExercise = await RoutineExercise.findByPk(id);
    if (!routineExercise) {
      return res.status(404).json({
        status: "404",
        message: "RoutineExercise not found",
      });
    }

    await routineExercise.destroy();
    res.status(200).json({
      status: "200",
      message: "RoutineExercise deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500",
      message: "Internal Server Error",
    });
  }
};
