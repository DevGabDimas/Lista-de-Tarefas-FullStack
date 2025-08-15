import TaskItem from "./TaskItem";
import { Typography, Stack } from "@mui/material";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          Nenhuma tarefa cadastrada.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </Stack>
      )}
    </div>
  );
}
