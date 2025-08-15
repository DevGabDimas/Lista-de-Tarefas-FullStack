import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

export default function TaskItem({ task, updateTask, deleteTask }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Status: {task.status}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<DoneIcon />}
            onClick={() => updateTask(task.id, { ...task, status: "done" })}
          >
            Concluir
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => deleteTask(task.id)}
          >
            Excluir
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
