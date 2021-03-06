import React from 'react';
import { MainMap, Nav, ContainerList } from 'components';
import query from 'query-string';
// import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import './Site.css';

function Site({ history, location }) {
  return <div className='site'>
    <Nav type={'fixed'} />
    <div className='site-content'>
    {/* <RenderAfterNavermapsLoaded ncpClientId={"f4fm9664il"} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}> */}
      <MainMap push={history.push} searchValue={query.parse(location.search).search} />
    {/* </RenderAfterNavermapsLoaded> */}
    <ContainerList />
    </div>
  </div>
}
export default Site;