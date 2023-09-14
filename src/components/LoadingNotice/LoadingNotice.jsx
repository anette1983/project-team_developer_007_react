import React, { useEffect } from 'react';
import Loader from '../Loader';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

const LoadingNotice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isLoading) {
      onOpen();
    }
  }, [isLoading, onOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <Loader />
          <ModalHeader>The database is loading...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xl">
              It may take up to 30 seconds to retrieve data from the database
              for the first time. We apologize for any inconveniences.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              sx={{
                backgroundColor: '#8baa36',
                color: '#FAFAFA',
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoadingNotice;
