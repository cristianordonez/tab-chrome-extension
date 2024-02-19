import ListItemButton, {
   ListItemButtonProps,
} from '@mui/material/ListItemButton';
import { styled } from '@mui/system';

interface StyledListItemButtonProps extends ListItemButtonProps {
   hover?: boolean;
}

const StyledListItemButton = styled(ListItemButton, {
   shouldForwardProp: (prop) => prop !== 'hover',
})<StyledListItemButtonProps>(({ theme, hover }) => ({
   backgroundColor: theme.palette.background.paper,
   alignItems: 'center',
   justifyContent: 'space-evenly',
   height: '65px',
   '&:hover': {
      // if hover is true, set the same as background color above
      backgroundColor: hover ? '' : theme.palette.background.paper,
      cursor: hover ? 'pointer' : 'default',
   },
}));

export default StyledListItemButton;
