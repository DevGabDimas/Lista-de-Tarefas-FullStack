import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Container, Paper, Typography, Box } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./App.css";

const API_URL = "http://localhost:5000/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async (task) => {
    await axios.post(API_URL, task);
    fetchTasks();
  };

  const updateTask = async (id, updatedTask) => {
    await axios.put(`${API_URL}/${id}`, updatedTask);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (

    <div className="Container-page">
      <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <AssignmentIcon fontSize="large" color="primary" />
          <Typography variant="h4" fontWeight="bold">
            Lista de Tarefas
          </Typography>
        </Box>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </Paper>
    </Container>
    </div>
    
  );
}
