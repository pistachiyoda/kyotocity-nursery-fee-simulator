import { BorderedTitle } from '../BorderedTitle'
import { Loader } from '@googlemaps/js-api-loader'
import { Box, Stack } from '@mui/material'
import { NurserySchoolCard2 } from './NurserySchoolCard2'

const apiOptions = {
    apiKey: 'AIzaSyAduWq4_oYT3-jRPUlW1Lii2nylqRfxgZU',
}

const displayMap = () => {
    const mapOptions = {
        center: { lat: 35.006438, lng: 135.74949 },
        zoom: 14,
    }
    const mapDiv = document.getElementById('map')
    if (!mapDiv) throw new Error('mapDivがnullです！')
    const map = new google.maps.Map(mapDiv, mapOptions)
    return map
}

interface Coordinate {
    lat: number
    lng: number
}

interface Location {
    [key: number]: Coordinate
}

const makeMarkers = (map: google.maps.Map) => {
    const locations: Location = {
        1: { lat: 35.00118651351385, lng: 135.75491505794182 },
        2: {
            lat: 35.00489789293792,
            lng: 135.75730186095825,
        },
        3: { lat: 35.010629797633705, lng: 135.73888104520478 },
    }

    const markers: google.maps.Marker[] = []
    for (const location in locations) {
        const marker = new google.maps.Marker({
            position: locations[location],
            map,
            label: { text: location, color: 'white', fontWeight: 'bold' },
        })
        markers.push(marker)
    }
}

const loader = new Loader(apiOptions)
loader.load().then(() => {
    console.log('Maps JS API loaded')
    const map = displayMap()
    const markers = makeMarkers(map)
})

export const NurserySchoolsInfo: React.FC = () => {
    return (
        <>
            <BorderedTitle>京都市中心部の企業主導型保育園</BorderedTitle>
            <Box
                id="map"
                sx={{ width: '100%', height: '300px', mt: 2, mb: 2 }}
            ></Box>

            <Stack spacing={2}>
                <NurserySchoolCard2
                    url="https://izuru-hoikuen.jp/access-kyoto/"
                    schoolName="①いづる保育園 京都"
                    introduction="日本初の和風保育園。保育士の先生方の工夫を凝らした保育が魅力の園です。"
                    price="35,000円"
                    address="京都府京都市下京区本柳水町７６６"
                    acceptableAge="6ヶ月~2歳"
                    instagramUrl="https://www.instagram.com/izuru_hoikuen.kyoto/?hl=ja"
                />
                <NurserySchoolCard2
                    url="https://growth.ed.jp/list/nishiki/"
                    schoolName="②ぐろうすきっず保育園 室町錦園"
                    introduction="「リトミック」「幼児体操」など、多彩な幼児教育プログラムを導入しています。"
                    price="20,000円"
                    address="京都市中京区天神山町281"
                    acceptableAge="生後57日〜5歳"
                    instagramUrl="https://www.instagram.com/growth.hoiku/?hl=ja"
                />
                <NurserySchoolCard2
                    url="https://www.nijo-le.com/"
                    schoolName="③二条ランド園"
                    introduction="先生や職員も含め関わる方々が一緒に、元気・明るくのみでなく、人として豊かに育っていくことを目的としています。"
                    price="35,000円"
                    address="京都府京都市中京区西ノ京東月光町24-1"
                    acceptableAge="2ヶ月〜5歳"
                    instagramUrl="https://www.instagram.com/land_en103/"
                />
            </Stack>
        </>
    )
}
