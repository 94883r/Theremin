import * as React from 'react';

//TODO: find StyleSheet typings

export const STYLE_CONST: any = {
	TOP_PANEL_HEIGHT: 70,
	BORDER_WIDTH: 0,
	BOTTOM_PANEL_HEIGHT: 150,
	TITLE_FONT_SIZE: 34,
	SLIDER_FONT_SIZE: 28,
	YELLOW: 'rgb(211,198,101)',
	GREEN: 'rgb(76,126,130)',
	RED: 'red',
	GREEN_VALUES: '76,126,130',
	BROWN: 'rgb(52,40,0)',
	WHITE: 'white',
	BLACK: 'black',
	GREY: 'grey',
	PADDING: 5,
}

export const style: any = {
	topPanel: {
		height: `${STYLE_CONST.TOP_PANEL_HEIGHT}px`,
		display: `flex`,
		flexDirection: 'row',
	},
	title: {
		container: {
			flexGrow: 11,
			height: STYLE_CONST.TOP_PANEL_HEIGHT,
		},
		container_mobile: {
			position: 'absolute',
		},
		h1: {
			fontSize: STYLE_CONST.TITLE_FONT_SIZE,
			lineHeight: `${STYLE_CONST.TOP_PANEL_HEIGHT}px`,
			margin: 0,
			marginLeft: 20,
			fontWeight: 400,
		},
		h1_mobile: {
			fontSize: 16,
			lineHeight: 2,
			marginLeft: 3,
		}
	},
	recordPlayButtonGroup: {
		container: {
			flexGrow: 1,
			display: `flex`,
			justifyContent: 'space-around',
		},
		container_mobile: {
			paddingTop: 18,
		}
	},

	waveformSelectGroup: {
		container: {
			marginLeft: '4vw',
			flexGrow: 1,
			display: `flex`,
			justifyContent: 'space-around',
		},
		container_mobile: {
			paddingTop: 18,
		}
	},

	button: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	buttonActive: {
		//TODO: delete this
		color: STYLE_CONST.GREEN,
	},
	buttonDisabled: {
		cursor: 'initial',
	},
	touchArea: {
		background: STYLE_CONST.YELLOW,
		cursor: 'pointer',
		border: `${STYLE_CONST.BORDER_WIDTH}px solid black`,
	},

	canvas: {
		barWidth: 10,
	},

	sliderGroup: {
		cursor: 'pointer',
	},

	slider: {
		height: STYLE_CONST.BOTTOM_PANEL_HEIGHT/3,
	},

	sliderContainer: {
		height: STYLE_CONST.BOTTOM_PANEL_HEIGHT/3,
	},

	sliderToolTip: {
		position: 'absolute',
		zIndex: 10,
		right: 0,
		fontSize: STYLE_CONST.SLIDER_FONT_SIZE,
		lineHeight: `${STYLE_CONST.BOTTOM_PANEL_HEIGHT/3}px`,
		marginRight: 20,
		pointerEvents: 'none',
	}
};