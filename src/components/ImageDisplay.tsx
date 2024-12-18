// src/components/ImageDisplay.tsx
import React, { useState, useEffect } from 'react';
import { Box, Image, Grid, GridItem, Flex, Text, Button, Spinner } from '@chakra-ui/react';
import { useDrawing } from '../hooks/useDrawing';
import { ImageData } from '../types/image';


const ImageDisplay: React.FC = () => {
    const { images, loadingImages, fetchImages, currentPage, totalImages, setPage } = useDrawing();

    useEffect(() => {
      fetchImages();
    }, [currentPage]);

    const handlePrevPage = () => {
      setPage(currentPage - 1);
    };

    const handleNextPage = () => {
      setPage(currentPage + 1);
    };

  return (
    <Box mt={5}>
      { loadingImages ? (<Flex justify="center"><Spinner /></Flex> ) :
      (
         <>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {images.map((image, index) => (
              <GridItem key={index}>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src={image.url} alt={`Generated Image ${index}`}  />
                <Box p={2}>
                {image.info && (
                    <>
                      <Text fontSize="sm" color="secondary.500">Prompt: {image.info.prompt}</Text>
                     <Text fontSize="sm" color="secondary.500">Negative Prompt: {image.info.negativePrompt}</Text>
                     <Text fontSize="sm" color="secondary.500">Seed: {image.info.seed}</Text>
                     <Text fontSize="sm" color="secondary.500">Width: {image.info.width} Height: {image.info.height}</Text>
                       <Text fontSize="sm" color="secondary.500">Sampler: {image.info.sampler} Steps: {image.info.steps}</Text>
                    </>
                )}
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
          <Flex justify="space-between" mt={4}>
              <Button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                colorScheme="primary"
              >
                Previous
              </Button>
            <Text>Page {currentPage} / {Math.ceil(totalImages/10)}</Text>
              <Button
                onClick={handleNextPage}
               disabled={ currentPage >=  Math.ceil(totalImages/10)  }
                colorScheme="primary"
              >
                Next
              </Button>
            </Flex>
          </>
      )}

    </Box>
  );
};

export default ImageDisplay;