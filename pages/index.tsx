import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { Box } from '@mui/material'
import { CalcCityTax } from '../components/CalcCityTax/CalcCityTax'
import { SpecifyLayer } from '../components/SpecifyLayer'
import { CalcNurseryFee } from '../components/CalcNurseryFee'
import { useState } from 'react'

const Home: NextPage = () => {
    const [fathersIncome, setFathersIncome] = useState(0)
    const [mothersIncome, setMothersIncome] = useState(0)
    const [familyCityTax, setFamilyCityTax] = useState(0)
    const [layer, setLayer] = useState(0)
    return (
        <Container>
            <Head>
                <title>京都市保育料シミュレーター</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component="main" sx={{ paddingTop: '15px' }}>
                <Typography
                    variant="h1"
                    sx={{
                        backgroundColor: '#622A78',
                        color: 'white',
                        padding: '20px 15px 20px 20px',
                        fontSize: '24px',
                    }}
                >
                    京都市の保育料シミュレーション
                </Typography>
                <p>
                    京都市認可保育施設の保育料を簡易シミュレーションできます。
                    <br />
                    <br />
                    この計算結果はあくまで参考情報です。
                    <br />
                    実際の保育料徴収額は京都市より送付される保育料決定通知書等をご確認ください。
                    <br />
                    <br />
                    なお，保育料の詳細については
                    <Link href="https://www.city.kyoto.lg.jp/hagukumi/page/0000178518.html">
                        「子ども・子育て支援制度における利用者負担額（保育料）について」
                    </Link>
                    をご覧ください。
                </p>
                <CalcCityTax
                    fathersIncome={fathersIncome}
                    setFathersIncome={setFathersIncome}
                    mothersIncome={mothersIncome}
                    setMothersIncome={setMothersIncome}
                    setFamilyCityTax={setFamilyCityTax}
                />
                <SpecifyLayer
                    familyCityTax={familyCityTax}
                    layer={layer}
                    setLayer={setLayer}
                />
                <CalcNurseryFee layer={layer} />
            </Box>

            <footer></footer>
        </Container>
    )
}

export default Home
