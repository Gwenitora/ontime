import { TimerPhase, Playback, OffsetMode } from 'ontime-types';
import { deepmerge } from 'ontime-utils';
import type { RuntimeState } from '../runtimeState.js';

const baseState: RuntimeState = {
  clock: 0,
  eventNow: null,
  eventNext: null,
  blockNow: null,
  blockNext: null,
  runtime: {
    selectedEventIndex: null,
    offset: 0,
    relativeOffset: 0,
    actualStart: null,
    offsetMode: OffsetMode.Absolute,
  },
  timer: {
    addedTime: 0,
    current: null,
    duration: null,
    elapsed: null,
    expectedFinish: null,
    finishedAt: null,
    phase: TimerPhase.None,
    playback: Playback.Stop,
    secondaryTimer: null,
    startedAt: null,
  },
  _timer: {
    forceFinish: null,
    pausedAt: null,
    secondaryTarget: null,
  },
  _rundown: {
    plannedStart: 0,
  },
};

export function makeRuntimeStateData(patch?: Partial<RuntimeState>): RuntimeState {
  return deepmerge(baseState, patch) as RuntimeState;
}
