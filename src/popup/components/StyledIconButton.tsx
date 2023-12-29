import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/system';

interface StyledIconButtonProps extends IconButtonProps {
   hover?: boolean;
}

/**
 * Icon button styled to allow for removal of hover effect
 */
const StyledIconButton = styled(IconButton, {
   shouldForwardProp: (prop) => prop !== 'hover',
})<StyledIconButtonProps>(({ theme, hover }) => ({
   '&:hover': {
      backgroundColor: hover ? '' : theme.palette.background.paper,
      cursor: hover ? 'pointer' : 'default',
   },
}));

export default StyledIconButton;
