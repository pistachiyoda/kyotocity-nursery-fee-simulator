import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export const NoteLikeCard: React.FC<{
    url: string
    image: string
    introduction: string
    price: string
}> = (props) => {
    const { url, image } = props
    return (
        <Card component="a" href={url} sx={{ textDecoration: 'none' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="note記事"
                />
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        note.com
                    </Typography>
                    <Typography>
                        京都・四条烏丸の「いづる保育園」を紹介したい | みはる |
                        note
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
