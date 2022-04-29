import React from 'react'


function iframe() {
    return {
        __html: '<iframe src="./home.html" width="540" height="450"></iframe>'
    }
}

function Home() {
  return (
    <div>
        <div dangerouslySetInnerHTML={iframe()} />
    </div> 
  )
}

export default Home