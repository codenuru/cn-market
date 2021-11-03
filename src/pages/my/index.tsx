import { Heading } from '@chakra-ui/react';
import React from 'react';

import AuthWrapper from '@components/AuthWrapper';

function DashBoard() {
  return (
    <AuthWrapper>
      <Heading> DASHBOARD</Heading>
    </AuthWrapper>
  );
}

export default DashBoard;
