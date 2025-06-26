import type { MaybeNumber } from '../../utils/utils.type.js';

export enum OffsetMode {
  Absolute = 'absolute',
  Relative = 'relative',
}

export type Runtime = {
  selectedEventIndex: MaybeNumber;
  offset: number;
  relativeOffset: number;
  actualStart: MaybeNumber;
  offsetMode: OffsetMode;
};
