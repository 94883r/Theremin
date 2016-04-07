import * as React from 'react';
import { connect } from 'react-redux';
const Modal = require('react-modal');
import Audio from '../Audio';
import ToggleButton from './ToggleButton'
import { downloadModalChange } from '../Actions/actions';
import {IGlobalState} from '../Constants/GlobalState';
import { DEFAULTS } from '../Constants/Defaults';

function select(state: IGlobalState): any {
	return {
		isOpen: state.DownloadModal.isOpen,
	};
}

@connect(select)
class DownloadModal extends React.Component<any, any> {

	constructor(props){
		super(props);

		this.state = {
			filename: 'theremin',
		};

		this.onDownloadSubmit = this.onDownloadSubmit.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.keyDown = this.keyDown.bind(this);


	}

	public render(): React.ReactElement<{}> {
		const mobileSizeSmall = this.props.windowWidth < 512 || this.props.windowHeight < 500;
		const mobileLandscape = this.props.windowHeight < 450 && this.props.windowWidth > this.props.windowHeight;

		const {
			overlay,
			title,
			title_mobile,
			title_mobileLandscape,
			subtitle,
			subtitle_mobile,
			input,
			input_mobile,
			button,
			button_mobile,
		} = this.props.style;

		let {content} = this.props.style;
		let contentPadding = this.props.windowWidth / 14;
		contentPadding = contentPadding > 20 ? 20 : contentPadding;
		
		content = Object.assign({}, content, {
			top: contentPadding,
			left: contentPadding,
			right: contentPadding,
			bottom: contentPadding,
		});


		return (
			<Modal isOpen={this.props.isOpen}
			       onRequestClose={this.closeModal}
			       style={{content, overlay}}>
				<div>
					<span style={
						Object.assign(
							{}, 
							title, 
							mobileSizeSmall && title_mobile, 
							mobileLandscape && title_mobileLandscape
						)}>
						Save Recording
					</span>
					<span style={Object.assign({}, subtitle, mobileSizeSmall && subtitle_mobile)}>Choose a filename</span>
					<input type="text"
					       placeholder={this.state.filename || 'Theremin'}
					       onChange={this.handleChange}
					       onKeyDown={this.keyDown}
					       onFocus={this.handleFocus}
					       onBlur={this.handleBlur}
					       style={Object.assign({}, input, mobileSizeSmall && input_mobile)}
					       />
					<ToggleButton onDown={this.onDownloadSubmit}
					              style={Object.assign({}, button, mobileSizeSmall && button_mobile)}>
						<div>Save {this.state.filename}.wav</div>
					</ToggleButton>
				</div>
			</Modal>
		);
	}

	private handleChange(e){
		const val = e.target.value ? e.target.value : DEFAULTS.Title;
		this.setState({filename: val})
	}

	private handleFocus(e){
		console.log('on focus', e)
		e.target.style.outline = 'none';
		e.target.placeholder = '';
	}

	private handleBlur(e){
		console.log('on blur', e)
		if (e.target.placeholder === '') {
			e.target.placeholder = DEFAULTS.Title;
		}
	}
	
	private keyDown(e: KeyboardEvent) {
		if (e.keyCode === 13) { //Enter
			this.onDownloadSubmit();
		}
	}

	private closeModal(){
		this.props.dispatch(downloadModalChange(false));
	}

	private onDownloadSubmit(){
		Audio.Download((wav: Blob) => {
			this.saveWav(wav);
		});
		this.props.dispatch(downloadModalChange(false));
	}

	private sanitizeFilename(s: string): string {
		return s.replace(/[^a-z0-9_\-]/gi, '_');
	}

	private saveWav(wav: Blob){
		console.log(wav);
		const url = (window.URL || (window as any).webkitURL).createObjectURL(wav);
		console.log(url);
		const link: HTMLAnchorElement = document.createElement('a');
		link.href = url;

		const downloadAttrSupported: boolean = ('download' in link);
		if (downloadAttrSupported) {
			link.setAttribute('download', `${this.sanitizeFilename(this.state.filename)}.wav`);
			let click = document.createEvent("Event");
			click.initEvent("click", true, true);
			link.dispatchEvent(click);
		} else {
			// console.log('save as')
			// // Show the anchor link with instructions to 'right click save as'
			// link.innerHTML = 'right click save as';
			// document.body.appendChild(link); //FIXME: append to a pop up box instead of body
			// //TODO: could use this to trigger a saveAs() https://github.com/koffsyrup/FileSaver.js


			console.log(cordova.file);

		}
	}
}
export default DownloadModal;