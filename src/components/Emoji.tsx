import bullsEye from '../assets/bulls-eye.webp';
import thumbUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbUp, alt: 'thumb up', boxSize: '25px'},
        5: {src: bullsEye, alt: 'bulls eye', boxSize: '35px'},
    }

  return (
    <Image {...emojiMap[rating]} />
  )
}

export default Emoji