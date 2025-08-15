import { Router } from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.controller.js';

const router = Router();

router.post('/', createTask);     // Criar tarefa
router.get('/', getTasks);        // Listar tarefas
router.put('/:id', updateTask);   // Atualizar tarefa
router.delete('/:id', deleteTask);// Deletar tarefa

export default router;
