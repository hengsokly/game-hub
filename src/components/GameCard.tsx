import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCropImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <CardBody>
            <Image src={getCropImageUrl(game.background_image)}></Image>
            <HStack justifyContent={'space-between'} marginY={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard