import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Checkbox, ListItemIcon, CircularProgress, Typography } from '@mui/material';

export default function ProjectList() {
  const projects = useSelector((s) => s.projects.list);
  const status = useSelector((s) => s.projects.status);

  if (status === 'loading') return <CircularProgress />;
  if (status === 'failed') return <Typography color='error'>Failed to load</Typography>;

  return (
    <List dense>
      {projects.map((p) => (
        <ListItem key={p.id} disablePadding>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={p.name} secondary={p.type} />
        </ListItem>
      ))}
    </List>
  );
}
