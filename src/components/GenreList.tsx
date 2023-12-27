import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
  
    if (isLoading) return <Spinner />
    if (error.length) return null;
    return (
      <List>
          {data.map(genre => 
            <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                <Image boxSize={'32px'} borderRadius={8} src={getCropImageUrl(genre.image_background)}/>
                <Button onClick={() => onSelectGenre(genre)} fontSize={'large'} variant={'link'}>{genre.name}</Button>
              </HStack>
            </ListItem>
          )}
      </List>
    )
}

export default GenreList