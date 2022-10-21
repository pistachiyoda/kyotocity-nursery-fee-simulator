import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export const NurserySchoolCard: React.FC<{
    url: string
    image: string
    schoolName: string
    introduction: string
    price: string
}> = (props) => {
    const { url, image, schoolName, introduction, price } = props
    return (
        <Card component="a" href={url}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="izuru"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {schoolName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {introduction}
                        <br />
                        <br />
                        月額保育料: {price}（1歳児の場合）
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
