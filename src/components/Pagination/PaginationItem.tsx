import React from 'react'
import { Button } from '@chakra-ui/button'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({isCurrent=false, number}: PaginationItemProps) {
  if (isCurrent) {
    return(
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return(
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.800"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}