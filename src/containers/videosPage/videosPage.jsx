import React from 'react';
import './videosPage.css';
import Video from '../../componenets/video/video';
import {BigButtonBlue} from '../../componenets/buttons/buttons';
import {withRouter} from 'react-router-dom';

const VideoLibrary = (props) =>(
    <div className='VideoBuild'>
    <h1 className='videoPageHeader'>ספריית וידאו</h1>
    <div className='videoLib'>
    <Video videoId={'XsnABbOCjtQ'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'5oCfdFvytMw'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'BVYWjOd0r9s'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'lxfPy7AAqpI'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'mphKIzj6Pwg'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'Y16dcJ6F8aU'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'3IO0-396JjU'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'HLAZoRTAmIM'}/>
    </div>
    <div className='videoLib'>
    <Video videoId={'wFzTckiM3dg'}/>
    </div>
    <BigButtonBlue buttonName={'חזרה'} route={()=>{props.history.goBack()}}/>
    </div>

)

export default withRouter(VideoLibrary);