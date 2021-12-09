import { getSvgPath } from 'figma-squircle'
import React, { useEffect, useMemo, useState } from 'react'
import { withSize, SizeMeProps } from 'react-sizeme'
import { Box, BoxProps } from 'theme-ui'

interface SquircleProps extends SizeMeProps, BoxProps {
  radius?: number
  smoothing?: number
  children?: React.ReactNode
}

export const Squircle = withSize({ monitorHeight: true })(function ({
  children,
  radius,
  smoothing,
  // @ts-ignore
  size,
  ...rest
}: SquircleProps) {
  const path = useMemo(() => {
    return getSvgPath({
      width: size.width!,
      height: size.height!,
      cornerRadius: radius ?? 0,
      cornerSmoothing: smoothing ?? 0.94
    })
  }, [size])

  return (
    <Box
      {...rest}
      sx={{
        width: 'fit-content',
        display: 'inline-flex',
        clipPath: radius ? `path('${path}')` : '',
        ...rest.sx
      }}
    >
      {children}
    </Box>
  )
})
