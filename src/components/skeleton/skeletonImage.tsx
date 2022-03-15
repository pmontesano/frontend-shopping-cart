import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface Props {
  className: string;
}

export default function SkeletonImage({ className }: Props) {
  return <Skeleton className={className} variant='rectangular' />;
}
