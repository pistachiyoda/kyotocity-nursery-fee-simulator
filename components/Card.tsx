import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard() {
    return (
        <a href="https://www.instagram.com/izuru_hoikuen.kyoto/?hl=ja">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="/static/images/cards/izuru_sample.png"
                        alt="izuru"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            いづる保育園
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            日本初の和風保育園。保育士の先生方の工夫を凝らした保育が魅力の園です。
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    )
}
