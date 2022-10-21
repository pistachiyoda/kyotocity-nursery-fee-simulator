import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { AppBar, Box, Button, Card, Toolbar } from '@mui/material'
import { CalcCityTax } from '../components/CalcCityTax/CalcCityTax'
import { CalcNurseryFee } from '../components/CalcNurseryFee'
import { useState } from 'react'
import { SubTitle } from '../components/Subtitle'
import { specifyLayer } from '../lib/specifyLayer'
import { calcCityTax } from '../lib/calcCityTax'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import ActionAreaCard from '../components/Card'
import { Stack } from '@mui/system'

const Home: NextPage = () => {
    const [fathersIncome, setFathersIncome] = useState(0)
    const [mothersIncome, setMothersIncome] = useState(0)
    const [fathersIncomeDeduction, setFathersIncomeDeduction] = useState(0)
    const [mothersIncomeDeduction, setMothersIncomeDeduction] = useState(0)
    const [layer, setLayer] = useState(0)

    const familyCityTax =
        calcCityTax(fathersIncome, fathersIncomeDeduction, 0) +
        calcCityTax(mothersIncome, mothersIncomeDeduction, 0)

    return (
        <Container>
            <Head>
                <title>京都市保育料シミュレーター</title>
                <meta name="description" content="京都市保育料シミュレーター" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ fontSize: '25px' }}>京都市企業主導型保育園.com</Box>
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
                    計算するのは幼保無償化対象外の0~2歳の保育料です。
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
                <SubTitle>Step1 父の情報の入力</SubTitle>
                <CalcCityTax
                    relationship="父"
                    myIncome={fathersIncome}
                    setMyIncome={setFathersIncome}
                    spouseIncome={mothersIncome}
                    setIncomeDeduction={setFathersIncomeDeduction}
                />
                <SubTitle>Step2 母の情報の入力</SubTitle>
                <CalcCityTax
                    relationship="母"
                    myIncome={mothersIncome}
                    setMyIncome={setMothersIncome}
                    spouseIncome={fathersIncome}
                    setIncomeDeduction={setMothersIncomeDeduction}
                />
                <SubTitle>Step3 保育料シミュレーション結果</SubTitle>
                <CalcNurseryFee familyCityTax={familyCityTax} />
            </Box>
            <p>
                シュミレーション結果を見て意外と高いと思われた方、認可保育園に確実に入れるか不安な方、
                専業主婦（夫）だけどスキル取得のためまとまった時間が必要な方...
                <br />
                <strong>企業主導型保育園</strong>
                を検討してみてはいかがでしょうか？
            </p>
            <p>
                <Link href="https://www.kigyounaihoiku.jp/users">
                    企業主導型保育園
                </Link>
                とは内閣府により認定されている保育事業です。
                認可保育所と枠組みは異なりますが認可保育所並みの厳しい設置・運営基準が課せられているため、一定の保育の質が確保されています。
            </p>
            <ActionAreaCard></ActionAreaCard>
            <ActionAreaCard></ActionAreaCard>
            <ActionAreaCard></ActionAreaCard>
            <Button
                variant="contained"
                endIcon={<SearchIcon />}
                sx={{
                    backgroundColor: '#622A78',
                    fontSize: '20px',
                    mt: 2,
                    mb: 2,
                }}
            >
                <a href="https://www.kigyounaihoiku.jp/report/nursery?page_no=1&prefecture=26&address_1=%E4%BA%AC%E9%83%BD%E5%B8%82&facility_name=&tel=&open_time_h=&open_time_m=&open_time=&close_time_h=&close_time_m=&close_time=&ex_open_time_h=&ex_open_time_m=&ex_open_time=&ex_close_time_h=&ex_close_time_m=&ex_close_time=">
                    京都市の企業主導型保育施設をもっと調べる
                </a>
            </Button>
            <footer>
                このサイトはこどもをとある企業主導型保育園に通わせてみて、その良さに気づいた有志の保護者によって運営されています。
            </footer>
        </Container>
    )
}

export default Home
