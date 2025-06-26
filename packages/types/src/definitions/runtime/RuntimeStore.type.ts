import { MaybeNumber } from '../../utils/utils.type.js';
import type { OntimeEvent } from '../core/OntimeEvent.type.js';
import type { SimpleTimerState } from './AuxTimer.type.js';
import type { BlockState } from './CurrentBlockState.type.js';
import type { MessageState } from './MessageControl.type.js';
import type { Runtime } from './Runtime.type.js';
import type { TimerState } from './TimerState.type.js';

export type RundownInfo = {
  numEvents: number;
  plannedStart: MaybeNumber;
  totalDuration: number;
  totalDelay: number;
};

export type RuntimeStore = {
  // timer data
  clock: number;
  timer: TimerState;
  onAir: boolean;

  // messages service
  message: MessageState;

  runtime: Runtime;

  // rundown data
  rundownInfo: RundownInfo;

  eventNow: OntimeEvent | null;
  eventNext: OntimeEvent | null;

  blockNow: BlockState | null;
  blockNext: BlockState | null;

  // extra timers
  auxtimer1: SimpleTimerState;
  auxtimer2: SimpleTimerState;
  auxtimer3: SimpleTimerState;

  // utils
  ping: number;
};
