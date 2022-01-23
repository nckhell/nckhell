import React, { ReactNode, useState } from 'react'

import type { TooltipDirectionType } from './tooltip.types'

interface TooltipProps {
  text: string
  direction?: TooltipDirectionType
  children: ReactNode
}

const DELAY = 100
const DEFAULT_DIRECTION: TooltipDirectionType = 'bottom'

export const Tooltip = ({
  children,
  direction = DEFAULT_DIRECTION,
  text,
}: TooltipProps) => {
  let timeout: ReturnType<typeof setTimeout>

  const [active, setActive] = useState<boolean>(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, DELAY)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction} font-inter`}>{text}</div>
      )}
    </div>
  )
}
