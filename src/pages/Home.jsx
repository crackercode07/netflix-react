import Main from "../component/Main"
import Row from "../component/Row"
import request from "../request"

function Home() {
  return (
    <>
    <Main />
    <Row rowID='1' title='Up Coming' fetchUrl={request.requestUpcoming}/>
    <Row rowID='2' title='Popular' fetchUrl={request.requestPopular}/>
    <Row rowID='3' title='Top Rated' fetchUrl={request.requestToprated}/>
    <Row rowID='4' title='Trending' fetchUrl={request.requestUpcoming}/>
    <Row rowID='5' title='Now Play' fetchUrl={request.requestNowplay}/>
    </>
  )
}

export default Home