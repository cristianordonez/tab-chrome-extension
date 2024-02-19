import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import { styled } from '@mui/system';

interface StyledListIconProps extends ListItemIconProps {
   hover?: boolean;
   marginRight?: boolean;
}

const StyledListItemIcon = styled(ListItemIcon, {
   shouldForwardProp: (prop) => prop !== 'marginRight',
})<StyledListIconProps>(({ marginRight }) => ({
   marginRight: marginRight ? '4em' : '0',
}));

export default StyledListItemIcon;
