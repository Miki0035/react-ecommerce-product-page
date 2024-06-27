import React, { useState } from 'react'
import { LightBoxProps } from '../types'

const LightBox: React.FC<LightBoxProps> = ({isShow, imageIndex, productImage }) => {
    const [showingImageIndex, setShowingImageIndex] = useState(imageIndex)
  return (
    <div>
        
    </div>
  )
}

export default LightBox