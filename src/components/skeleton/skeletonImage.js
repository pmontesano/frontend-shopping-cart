import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonImage({ className }) {
  return <Skeleton className={className} variant='rectangular' />;
}
