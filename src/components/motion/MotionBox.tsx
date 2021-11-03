import { Box, BoxProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

import { Merge } from 'types/merge';

type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<'div'>>;

const MotionBox: React.FC<MotionBoxProps> = motion(Box);

export default MotionBox;
