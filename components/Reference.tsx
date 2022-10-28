import { Link, Typography } from '@mui/material'

const References = [
    [
        '京都市の住民税',
        'https://www.city.kyoto.lg.jp/gyozai/page/0000001469.html',
    ],
    [
        '京都市の保育料',
        'https://www.city.kyoto.lg.jp/hagukumi/page/0000178518.html',
    ],
]

export const Reference: React.FC = () => {
    const referenceList = References.map(([title, url]) => (
        <li key={title}>
            <Link href={url}>{title}</Link>
        </li>
    ))
    return (
        <section>
            <Typography variant="h6">参考サイト</Typography>
            <ul>{referenceList}</ul>
        </section>
    )
}
