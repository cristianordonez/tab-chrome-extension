import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/system';

interface StyledIconButtonProps extends IconButtonProps {
   hover?: boolean;
   marginRight?: boolean;
}

/**
 * Icon button styled to allow for removal of hover effect
 */
const StyledIconButton = styled(IconButton, {
   shouldForwardProp: (prop) => prop !== 'hover' && prop !== 'marginRight',
})<StyledIconButtonProps>(({ theme, hover, marginRight }) => ({
   margin: '1em',
   '&:hover': {
      backgroundColor: hover ? '' : theme.palette.background.paper,
      cursor: hover ? 'pointer' : 'default',
   },
   marginRight: marginRight ? '4em' : '0',
}));

export default StyledIconButton;
