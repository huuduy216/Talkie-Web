import SettingsModal from 'flarum/components/SettingsModal';

export default class ChatSettingsModal extends SettingsModal 
{
	className() 
	{
		return 'Modal--small';
	}

	title() 
	{
		return app.translator.trans('pushedx-chat.admin.settings.title');
	}

	form() {
		return [
			<div className='Form-group ChatSettings-Modal'>
				<label>{app.translator.trans('pushedx-chat.admin.settings.charlimit')}</label>
				<input className='FormControl' type='number' max='1024' bidi={this.setting('pushedx-chat.settings.charlimit', 512)}/>
				<label>{app.translator.trans('pushedx-chat.admin.settings.floodgate.title')}</label>
				<div>
					<label>{app.translator.trans('pushedx-chat.admin.settings.floodgate.number')}</label>
					<input className='FormControl' type='number' bidi={this.setting('pushedx-chat.settings.floodgate.number', 3)}/>
					<label>{app.translator.trans('pushedx-chat.admin.settings.floodgate.time')}</label>
					<input className='FormControl' type='text' bidi={this.setting('pushedx-chat.settings.floodgate.time', '1 hour')} />
				</div>
			</div>
		];
	}
}
