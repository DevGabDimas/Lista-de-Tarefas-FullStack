import pool from '../config/db.js';

// 📌 Criar tarefa
export const createTask = async (req, res) => {
  const { title, description, priority, due_date, status, category_id, user_id } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO tasks (title, description, priority, due_date, status, category_id, user_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, priority, due_date, status, category_id, user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// 📌 Listar todas tarefas
export const getTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

// 📌 Atualizar tarefa
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, due_date, status, category_id } = req.body;
  try {
    const result = await pool.query(
      `UPDATE tasks 
       SET title = $1, description = $2, priority = $3, due_date = $4, status = $5, category_id = $6
       WHERE id = $7 RETURNING *`,
      [title, description, priority, due_date, status, category_id, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// 📌 Deletar tarefa
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
};
