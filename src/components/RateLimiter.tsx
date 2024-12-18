// src/components/RateLimiter.tsx
import React from 'react';
import { Text } from '@chakra-ui/react';

const RateLimiter: React.FC = () => {
  return (
      <Text color="red.500">Too many requests, please try again later.</Text>
  );
};

export default RateLimiter;