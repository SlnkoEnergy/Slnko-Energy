import React, { useState, useEffect, useRef } from 'react'
import { Box, IconButton, MobileStepper } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views'

const Carousel = ({ items, interval = 5000, autoPlay = true }) => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = items.length
  const autoPlayRef = useRef()

  useEffect(() => {
    if (!autoPlay) return
    autoPlayRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps)
    }, interval)
    return () => clearInterval(autoPlayRef.current)
  }, [autoPlay, interval, maxSteps])

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps)
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps)
  const handleStepChange = (step) => setActiveStep(step)

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 300,
              backgroundColor: '#eee'
            }}
          >
            <img src={item.image} alt={item.label} style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Box>
        ))}
      </SwipeableViews>

      <IconButton
        onClick={handleBack}
        sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)' }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)' }}
      >
        <KeyboardArrowRight />
      </IconButton>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{ justifyContent: 'center', mt: 1 }}
      />
    </Box>
  )
}

export default Carousel
