/**
 *This single class represents all programs
 */
export class Program {
  /**
   *
   * @param {string} id
   * @param {Date} created_at
   * @param {Date} completed_at
   * @param {number} duration - the duration of this program in days
   * @param {string} user_id
   * @param {Array} routines - an Array that contains all the routines that are part of this program
   */
  constructor(id, created_at, completed_at, duration, user_id, routines) {
    this.id = id;
    this.created_at = created_at;
    this.completed_at = completed_at;
    this.duration = duration;
    this.user_id = user_id;
    this.routines = routines || [];
  }

  /**
   *
   * @param {Routine} routine - an object of the Routine class
   */
  addRoutine(routine) {
    this.routines.push(routine);
  }
  /**
   *
   * @param {string} id - The id of the routine to be deleted from the program
   */
  deleteRoutine(id) {
    let index = this.routines.findIndex((routine) => routine.id == id);
    this.routines.splice(index, 1);
  }
}
