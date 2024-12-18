// src/components/DrawingSettings.tsx
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useDrawing } from '../hooks/useDrawing';

const DrawingSettings: React.FC = () => {
    const {
      prompt,
      negativePrompt,
      width,
      height,
      sampler,
      steps,
      seed,
      setPrompt,
      setNegativePrompt,
      setWidth,
      setHeight,
      setSampler,
      setSteps,
      setSeed,
      generateImage,
      isLoading,
  } = useDrawing();
  const toast = useToast();

  const handleSubmit = async () => {
    if (!prompt) {
        toast({
            title: "Please enter a prompt.",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        return
      }
      generateImage();
  };


return (
    <Box p={5} boxShadow="md" borderRadius="md" bg="white">
        <Flex direction="column" gap={4}>
            <FormControl>
                <FormLabel>Prompt</FormLabel>
                <Textarea
                  placeholder="Enter your prompt here"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  />
            </FormControl>
            <FormControl>
            <FormLabel>Negative Prompt</FormLabel>
            <Textarea
              placeholder="Enter your negative prompt here"
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
            />
          </FormControl>
            <Flex gap={4}>
              <FormControl>
                <FormLabel>Width</FormLabel>
                <NumberInput value={width} min={256} max={1024} onChange={val => setWidth(Number(val))}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
                <FormControl>
                    <FormLabel>Height</FormLabel>
                  <NumberInput value={height} min={256} max={1024} onChange={val => setHeight(Number(val))}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </Flex>
          <FormControl>
                <FormLabel>Sampler</FormLabel>
                <Select value={sampler} onChange={(e) => setSampler(e.target.value)}>
                    <option value="k_euler_ancestral">k_euler_ancestral</option>
                    <option value="k_euler">k_euler</option>
                    <option value="k_lms">k_lms</option>
                    <option value="ddim">ddim</option>
                </Select>
            </FormControl>
            <Flex gap={4}>
                <FormControl>
                    <FormLabel>Steps</FormLabel>
                  <NumberInput value={steps} min={10} max={50} onChange={val => setSteps(Number(val))}>
                      <NumberInputField />
                   </NumberInput>
                </FormControl>
                <FormControl>
                    <FormLabel>Seed</FormLabel>
                    <NumberInput value={seed} onChange={val => setSeed(Number(val))}>
                      <NumberInputField />
                  </NumberInput>
                </FormControl>
            </Flex>
            <Button
              colorScheme="primary"
              onClick={handleSubmit}
              isLoading={isLoading}
            >
                Generate
            </Button>
        </Flex>
    </Box>
);
};
export default DrawingSettings;
