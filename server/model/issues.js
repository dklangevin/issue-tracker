const pool = require('../database.js');

// get all issues
const getIssues = async () => {
  const query =
    'SELECT i.id, i.title, i.description, i.project, i.priority, c.title category FROM issues AS i JOIN categories AS c ON i.category = c.id ';
  // const query = 'SELECT * FROM issues ';
  const { rows } = await pool.query(query);
  return rows;
};

// // get an issue
// export const getIssueById = async (id) => {
//   const query = 'SELECT * FROM issues WHERE id=$1';
//   const { rows } = await pool.query(query, [id]);
//   return rows[0];
// };

// // create an issue
// export const createIssue = async (issue) => {
//   const { title, description, priority, category, project } = issue;
//   const query =
//     'INSERT INTO issues(title, description, priority, category, project) VALUES ($1, $2, $3, $4, $5)';
//   const { rows } = await pool.query(query, [
//     title,
//     description,
//     priority,
//     category,
//     project,
//   ]);
// };

// // update an issue
// export const updateIssue = async (id, issue) => {
//   const { title, project, description } = issue;
//   const query =
//     'UPDATE issues SET title=$1, project=$2, description=$3 WHERE id=$4';
//   await pool.query(query, [title, project, description, id]);
// };

// // delete an issue
// export const deleteIssue = async (id) => {
//   const query = 'DELETE FROM issues WHERE id=$1';
//   await pool.query(query, [id]);
// };

module.exports = {
  getIssues,
};
