import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import { CalcCityTax } from '../components/CalcCityTax/CalcCityTax'
import { CalcNurseryFee } from '../components/CalcNurseryFee'
import { useState } from 'react'
import { SubTitle } from '../components/SubTitle'
import { calcCityTax } from '../lib/calcCityTax'
import SearchIcon from '@mui/icons-material/Search'
import CalculateIcon from '@mui/icons-material/Calculate'
import { NurserySchoolCard } from '../components/NurserySchoolCard'
import { Stack } from '@mui/system'
import Script from 'next/script'
import Image from 'next/image'
import { specifyLayer } from '../lib/specifyLayer'
import { specifyNurseryFee } from '../lib/specifyNurseryFee'

const Home: NextPage = () => {
    const [fathersIncome, setFathersIncome] = useState(0)
    const [mothersIncome, setMothersIncome] = useState(0)
    const [fathersIncomeDeduction, setFathersIncomeDeduction] = useState(0)
    const [mothersIncomeDeduction, setMothersIncomeDeduction] = useState(0)
    const [nurseryFee_a, setNurseryFee_a] = useState(0)
    const [nurseryFee_b, setNurseryFee_b] = useState(0)
    const [nurseryFee_c, setNurseryFee_c] = useState(0)

    const familyCityTax =
        calcCityTax(fathersIncome, fathersIncomeDeduction, 0) +
        calcCityTax(mothersIncome, mothersIncomeDeduction, 0)

    const setNurseryFees = () => {
        const layer = specifyLayer(familyCityTax)
        const [a, b, c] = specifyNurseryFee(layer)
        setNurseryFee_a(a)
        setNurseryFee_b(b)
        setNurseryFee_c(c)
    }

    return (
        <>
            <Container maxWidth="sm">
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-TW6JSZD2M0"
                />
                <Script
                    id="gtag"
                    dangerouslySetInnerHTML={{
                        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TW6JSZD2M0');
`,
                    }}
                />
                <Head>
                    <title>京都市保育料シミュレーター</title>
                    <meta
                        name="description"
                        content="京都市保育料を計算するツールです。給与年収を入力することで京都市の認可保育園の保育料を簡易的に計算できます。 京都市にて保活中の皆様、ぜひご活用ください！"
                    />
                    <meta
                        name="google-site-verification"
                        content="QSSagDQxJDpzwkQ5v43H57EuZc9RwvzqQ9LEqZ99s4I"
                    />
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
                        京都市認可保育施設の保育料を、給与年収・代表的な控除を入力することで簡易シミュレーションできます。
                        （サラリーマンの給料などが入力されることを前提としています。）
                        <br />
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
                        incomeDeduction={fathersIncomeDeduction}
                    />
                    <SubTitle>Step2 母の情報の入力</SubTitle>
                    <CalcCityTax
                        relationship="母"
                        myIncome={mothersIncome}
                        setMyIncome={setMothersIncome}
                        spouseIncome={fathersIncome}
                        setIncomeDeduction={setMothersIncomeDeduction}
                        incomeDeduction={mothersIncomeDeduction}
                    />
                    <SubTitle>Step3 保育料シミュレーション結果</SubTitle>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<CalculateIcon />}
                        onClick={() => {
                            setNurseryFees()
                            gtag('event', 'click_calc_button', {
                                event_category: 'click_button',
                                event_label: 'click_calc_button',
                                value: 1,
                            })
                        }}
                    >
                        概算額を計算する
                    </Button>
                    <CalcNurseryFee
                        a={nurseryFee_a}
                        b={nurseryFee_b}
                        c={nurseryFee_c}
                    />
                </Box>
                <p>
                    シュミレーション結果を見て意外と高いと思われた方、認可保育園に確実に入れるか不安な方、
                    専業主婦（夫）だけどスキル取得のためまとまった時間が必要な方...
                    <br />
                    <strong>企業主導型保育園</strong>
                    を検討してみてはいかがでしょうか？
                </p>
                <Stack spacing={2}>
                    <NurserySchoolCard
                        url="https://www.instagram.com/izuru_hoikuen.kyoto/?hl=ja"
                        image="/static/images/cards/izuru.png"
                        schoolName="いづる保育園"
                        introduction="日本初の和風保育園。保育士の先生方の工夫を凝らした保育が魅力の園です。"
                        price="35,000円"
                    />
                    <NurserySchoolCard
                        url="https://www.instagram.com/growth.hoiku/?hl=ja"
                        image="/static/images/cards/growthkids.png"
                        schoolName="ぐろうすきっず保育園"
                        introduction="「リトミック」「幼児体操」など、多彩な幼児教育プログラムを導入しています。"
                        price="20,000円"
                    />
                    <NurserySchoolCard
                        url="https://www.instagram.com/land_en103/"
                        image="/static/images/cards/nijoland.png"
                        schoolName="二条ランド園"
                        introduction="先生や職員も含め関わる方々が一緒に、元気・明るくのみでなく、人として豊かに育っていくことを目的としています。"
                        price="35,000円"
                    />
                </Stack>
                <p>
                    企業主導型保育園とは内閣府により認定されている保育事業です。
                    認可保育所と枠組みは異なりますが認可保育所並みの厳しい設置・運営基準が課せられているため、一定の保育の質が確保されています。
                </p>
                <Typography
                    variant="h1"
                    sx={{
                        backgroundColor: '#622A78',
                        color: 'white',
                        padding: '20px 15px 20px 20px',
                        fontSize: '24px',
                    }}
                >
                    企業主導型保育園の利点
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="入園結果がすぐわかる！"
                            secondary="企業主導型保育施設への入園手続きは、多くの場合、その施設に直接申し込むことになり、入園の条件さえ満たせば、すぐに入園することも可能です。"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="入園のハードルが低い！"
                            secondary={`企業主導型保育施設の場合は、施設定員に空きがあれば、保育の支給認定（地域枠の場合）を受けるか園ごとの要件を満たせば（従業員枠の場合）入園が可能です。
                                        そのため、認可保育園だと点数不足で入園が難しいパートタイマーや求職活動中の方であっても入園可能な場合があります。`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="保育料もお手頃！"
                            secondary="企業主導型保育施設は国からの助成を受けているため、保護者から徴収する「保育料」は、基準によって上限が定められています。そのため、認可外保育施設と比較して、保育料が安くなっています。"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="一時預かりを行っている施設も！"
                            secondary="普段は保育園に通わせていないけどちょっと子どもを預けたいという時に一時預かりの利用が可能な場合があります。"
                        />
                    </ListItem>
                </List>

                <p>
                    企業主導型保育園に関する最新の情報は
                    <Link href="https://www.kigyounaihoiku.jp/users">
                        こちら
                    </Link>
                    をご確認ください。
                </p>

                <Button
                    variant="contained"
                    fullWidth
                    component="a"
                    href="https://www.kigyounaihoiku.jp/report/nursery?page_no=1&prefecture=26&address_1=%E4%BA%AC%E9%83%BD%E5%B8%82&facility_name=&tel=&open_time_h=&open_time_m=&open_time=&close_time_h=&close_time_m=&close_time=&ex_open_time_h=&ex_open_time_m=&ex_open_time=&ex_close_time_h=&ex_close_time_m=&ex_close_time="
                    endIcon={<SearchIcon />}
                    sx={{
                        backgroundColor: '#622A78',
                        fontSize: '20px',
                        mt: 2,
                        mb: 2,
                    }}
                >
                    京都市の企業主導型保育施設をもっと調べる
                </Button>
                <Box maxWidth={200} margin="auto">
                    <Image
                        src="/mother_and_child.png"
                        width={536}
                        height={653}
                        alt="mother_and_child"
                        layout="responsive"
                    ></Image>
                </Box>
            </Container>
            <Box sx={{ backgroundColor: '#ede1f2', p: 3, textAlign: 'center' }}>
                このサイトはこどもを実際に企業主導型保育園に通わせている有志の保護者によって運営されています。
                <br />
                お気づきの点、ご要望、質問等ありましたら、
                <a href="https://twitter.com/pistachiyoda">こちら</a>
                よりDMにてご連絡ください <br />
                <br />
                @Copyright 2022 pistachiyoda
            </Box>
        </>
    )
}

export default Home
