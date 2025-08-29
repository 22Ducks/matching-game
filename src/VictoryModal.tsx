import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from 'styled-components';

type Props = {
    open: boolean;
    reset: () => void;
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const ModalContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const VictoryModal = ({open, reset}: Props) => {

    return (
        <Modal open={open}>
            <Box sx={modalStyle}>
                <ModalContent>
                    <h2>VICTORY!</h2>
                    <Button onClick={reset}>Play Again?</Button>
                </ModalContent>
            </Box>
        </Modal>
    );
}