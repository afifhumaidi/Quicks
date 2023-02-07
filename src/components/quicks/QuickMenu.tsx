import React, { useContext, useEffect, useRef } from 'react'
import CircleButton from '../ui/CircleButton'
import { QIInbox, QITask, QIThunder } from '../ui/QuicksIcons'
import {
  QuickDispatchContext,
  QuickStatesContext
} from './context/QuickContext'
import { QuickActionType } from './hooks/useQuickReducer'
import './assets/css/QuickMenu.css'

export default function QuicksMenu(): JSX.Element {
  const quicksStates = useContext(QuickStatesContext)
  const dispatchQuicksStates = useContext(QuickDispatchContext)
  const isFirstRender = useRef(true)

  useEffect(() => {
    return () => {
      isFirstRender.current = false
    }
  })

  if (isFirstRender.current) {
    return (
      <div className="relative flex gap-x-[16px] items-center">
        {/* Quick Button Container */}
        <CircleButton
          size="68"
          className="relative bg-primaryBlue"
          onClick={() => {
            dispatchQuicksStates({ type: QuickActionType.TOGGLE_QUICK })
          }}
        >
          <QIThunder />
        </CircleButton>
      </div>
    )
  }

  // Task Button Active
  if (quicksStates.task) {
    return (
      <div className="relative flex gap-x-[16px] items-center">
        {/* Inbox Button Container */}
        <div className="relative">
          <CircleButton
            size="60"
            className="bg-[#F2F2F2]"
            onClick={() => {
              dispatchQuicksStates({ type: QuickActionType.ENABLE_INBOX })
            }}
          >
            <QIInbox color="#8885FF" />
          </CircleButton>
        </div>

        {/* Task Button Container */}
        <div className="relative">
          <CircleButton
            size="68"
            className="absolute top-0 right-[15px] bg-[#4F4F4F]"
            onClick={() => {
              dispatchQuicksStates({ type: QuickActionType.RESET })
              isFirstRender.current = true
            }}
          />
          <CircleButton
            size="68"
            className="relative ml-[15px] bg-[#F8B76B] cursor-auto"
          >
            <QITask />
          </CircleButton>
        </div>
      </div>
    )
  }

  // Inbox Button active
  if (quicksStates.inbox) {
    return (
      <div className="relative flex gap-x-[16px] items-center">
        {/* Task Button Container */}
        <div className="relative">
          <CircleButton
            className="bg-[#F2F2F2]"
            size="60"
            onClick={() => {
              dispatchQuicksStates({ type: QuickActionType.ENABLE_TASK })
            }}
          >
            <QITask color="#F8B76B" />
          </CircleButton>
        </div>

        {/* Quick Button Container */}
        <div className="relative">
          <CircleButton
            size="68"
            className="absolute top-0 right-[15px] bg-[#4F4F4F]"
            onClick={() => {
              dispatchQuicksStates({ type: QuickActionType.RESET })
              isFirstRender.current = true
            }}
          />
          <CircleButton
            size="68"
            className="relative ml-[15px] bg-[#8785FF] cursor-auto"
          >
            <QIInbox />
          </CircleButton>
        </div>
      </div>
    )
  }

  // Default
  return (
    <div className="relative flex gap-x-[26px] items-center">
      {/* Task Button Container */}
      <div
        className={
          'relative ' +
          (quicksStates.quick ? 'animateTaskIn' : 'animateTaskOut')
        }
      >
        {quicksStates.quick && (
          <label className="absolute top-[-30px] right-0 left-0 leading-4 text-white text-center">
            Task
          </label>
        )}
        <CircleButton
          className="bg-[#F2F2F2]"
          size="60"
          onClick={() => {
            dispatchQuicksStates({ type: QuickActionType.ENABLE_TASK })
          }}
        >
          <QITask color="#F8B76B" />
        </CircleButton>
      </div>

      {/* Inbox Button Container */}
      <div
        className={
          'relative ' +
          (quicksStates.quick ? 'animateInboxIn' : 'animateInboxOut')
        }
      >
        {quicksStates.quick && (
          <label className="absolute top-[-30px] right-0 left-0 leading-4 text-white text-center">
            Inbox
          </label>
        )}
        <CircleButton
          size="60"
          className="bg-[#F2F2F2]"
          onClick={() => {
            dispatchQuicksStates({ type: QuickActionType.ENABLE_INBOX })
          }}
        >
          <QIInbox color="#8885FF" />
        </CircleButton>
      </div>

      {/* Quick Button Container */}
      <CircleButton
        size="68"
        className="relative bg-primaryBlue"
        onClick={() => {
          dispatchQuicksStates({ type: QuickActionType.TOGGLE_QUICK })
        }}
      >
        <QIThunder />
      </CircleButton>
    </div>
  )
}
