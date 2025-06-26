import { SimpleDirection, SimplePlayback } from './AuxTimer.type.js';
import { Playback } from './Playback.type.js';
import { OffsetMode } from './Runtime.type.js';
import type { RuntimeStore } from './RuntimeStore.type.js';
import { TimerPhase } from './TimerState.type.js';

export const runtimeStorePlaceholder: Readonly<RuntimeStore> = {
  clock: 0,
  timer: {
    addedTime: 0,
    current: null, // changes on every update
    duration: null, // only changes if event changes
    elapsed: null, // changes on every update
    expectedFinish: null, // change can only be initiated by user, can roll over midnight
    finishedAt: null, // can change on update or user action
    phase: TimerPhase.None, // can change on update or user action
    playback: Playback.Stop, // change initiated by user
    secondaryTimer: null, // change on every update
    startedAt: null, // change can only be initiated by user
  },
  onAir: false,
  message: {
    timer: {
      text: '',
      visible: false,
      blink: false,
      blackout: false,
      secondarySource: null,
    },
    secondary: '',
  },
  runtime: {
    selectedEventIndex: null, // changes if rundown changes or we load a new event
    offset: 0, // changes at runtime
    relativeOffset: 0, // changes at runtime
    actualStart: null, // set once we start the timer
    offsetMode: OffsetMode.Absolute,
  },
  rundownInfo: {
    numEvents: 0, // change initiated by user
    plannedStart: 0, // only changes if event changes
    totalDelay: 0,
    totalDuration: 0,
  },
  blockNow: null,
  blockNext: null,
  eventNow: null,
  eventNext: null,
  auxtimer1: {
    current: 0,
    direction: SimpleDirection.CountUp,
    duration: 0,
    playback: SimplePlayback.Stop,
  },
  auxtimer2: {
    current: 0,
    direction: SimpleDirection.CountUp,
    duration: 0,
    playback: SimplePlayback.Stop,
  },
  auxtimer3: {
    current: 0,
    direction: SimpleDirection.CountUp,
    duration: 0,
    playback: SimplePlayback.Stop,
  },
  ping: -1,
};
