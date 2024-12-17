import React from 'react'
import styled from 'styled-components'
const MAIN=styled.div`
  width: 100%;
  height: 100vh;
  background: #2986db;
`
const ONE=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 padding-top: 150px;
`
const Ticket = () => {
  return (
    <MAIN>
      <ONE>
        <img width={'250px'} height={'150px'} style={{marginLeft:'60px'}} src="https://play-lh.googleusercontent.com/wLt4jPMF85FGNmkjc8MBUFyne9OnBokOkSyTPWsEmoquNnbs6mvSJtmu4tNWi1AcHXI" alt="" />
        <img width={'250px'} height={'150px'} style={{marginLeft:'60px'}}  src="https://i0.wp.com/buzzzted.com/wp-content/uploads/2024/05/CRED.png?fit=960%2C503&ssl=1" alt="" />
        <img width={'250px'} height={'150px'} style={{marginLeft:'60px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuv-uP42SxGfD2lRVBxZ0aEpKMuQAekj35yw&s" alt="" />
        <img width={'250px'} height={'150px'}style={{marginLeft:'60px'}}  src="https://play-lh.googleusercontent.com/0tBPMCBMB3UbYArM7ySjFdOIXT0jWcI4yh3iE2Q5gzugKuE7ur-TS76kaQTPCGpDgdQ" alt="" />
        <img width={'250px'} height={'150px'} style={{marginLeft:'60px',marginTop:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbAD2iOPk1Yk_7DDKy2A80Xdv2YF01Ny1kg&s" alt="" />
        <img width={'250px'} height={'150px'} style={{marginLeft:'60px',marginTop:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OrK6aQN7sW_17tLm70luhSKZBtLQgNt_pw&s" alt="" />
      </ONE>
    </MAIN>
  )
}

export default Ticket
