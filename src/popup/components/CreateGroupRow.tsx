// import AddIcon from '@mui/icons-material/Add';
// import { List } from '@mui/material';
// import React, { ChangeEvent, useState } from 'react';
// import useModal from '../hooks/useModal';
// import Modal from './Modal';
// import Row from './Row';

// interface Props {
//    handleCreate: (title: string) => Promise<void>;
// }

// // button used to show new group button
// export default function CreateGroupRow({ handleCreate }: Props) {
//    const { open, toggle } = useModal();

//    const [inputValue, setInputValue] = useState<string>('');

//    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       await handleCreate(inputValue);
//       toggle();
//    };

//    return (
//       <>
//          <List>
//             <Row
//                title='Create new group'
//                PrefixIcon={<AddIcon />}
//                handleClick={toggle}
//             />
//          </List>
//          <Modal
//             open={open}
//             handleClose={toggle}
//             title='Group Name'
//             inputValue={inputValue}
//             setInputValue={setInputValue}
//             buttonAction={handleSubmit}
//             buttonText='Save'
//          />
//       </>
//    );
// }
