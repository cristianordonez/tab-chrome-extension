import Chip, { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/system';

interface StyledChipProps extends ChipProps {
   isSmall?: boolean;
}

const StyledChip = styled(Chip)<StyledChipProps>(({ isSmall }) => ({
   size: isSmall ? 'small' : 'medium',
   width: '10%',
   maxWidth: isSmall ? '75px' : '100px',
   fontWeight: isSmall ? 'bold' : 'bolder',
   fontSize: isSmall ? '16px' : '18px',
}));

export default StyledChip;
