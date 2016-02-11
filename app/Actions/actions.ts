import {
	ActionType,
	NOTE_GUIDE_TOGGLE,
	WAVEFORM_CHANGE,
	RECORDER_TOGGLE,
	PLAYER_TOGGLE,
	SLIDER_CHANGE
} from '../Constants/ActionTypes';

export interface IAction {
	type: ActionType;
}

export function NoteGuide(): IAction {
	return {
		type: NOTE_GUIDE_TOGGLE
	};
}

export function Waveform(wave: string): any {
	return {
		type: WAVEFORM_CHANGE,
		wave,
	};
}

export function Player(isPlaying: boolean): any {
	return {
		type: PLAYER_TOGGLE,
		isPlaying,
	};
}

export function Recorder(isRecording: boolean): any {
	return {
		type: RECORDER_TOGGLE,
		isRecording,
	};
}

export function SliderAction(sliderName: string, value: number): any {
	return {
		type: SLIDER_CHANGE,
		sliderName,
		value,
	};
}
