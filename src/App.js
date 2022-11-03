import './App.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



function App() {
  return (
    <div className="App">
      <Stack direction={'row'} spacing={5} paddingTop={15} paddingLeft={50}>
        <Button variant={'text'}>click</Button>
        <Button variant={'contained'}>contained </Button>
        <Button variant={'outlined'}>outlined</Button>
        <Button disable>disable</Button>
        <Button variant={'outlined'} startIcon={<DeleteIcon/>}>delete</Button>
        <Button variant={'outlined'} startIcon={<SendIcon/>}>send</Button>
      </Stack>
    </div>
  );
}

export default App;
