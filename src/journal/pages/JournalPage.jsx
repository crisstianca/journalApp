import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectdView } from '../views'


export const JournalPage = () => {
  return (
    <>
    <JournalLayout>
      
      {/* <Typography> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repellendus eaque doloribus aspernatur pariatur tenetur, minima corporis reiciendis quae omnis rerum voluptates incidunt quaerat eum nam, iusto aut suscipit ab. </Typography> */}
    
      {/*<NothingSelectdView />*/}

      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed', 
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
      
    </>
  )
}
