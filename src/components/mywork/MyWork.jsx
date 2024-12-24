import React from 'react'
import './MyWork.css'
import theme_pattern from '@svg/theme_pattern.svg'
import mywork_data from '@svg/mywork_data'
import arrow_icon from '@svg/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My lasted work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index)=>{
          return <img key={index} src={work.w_img} />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork