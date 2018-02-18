import { EventEmitter } from 'events';

class notificationHandler extends EventEmitter {
	constructor() {
		super();
		this.items = [];
	}

    create({ title, content, duration, onCreate, onClose }) {
		const notification = {
			title,
			content,
			duration,
			onCreate,
			onClose
		}

		this.items.push(notification);
		this.emit('create', this.items);
	};

	addChangeListener(callback) {
		this.addListener('create', callback);
	}
	
	removeChangeListener(callback) {
		this.removeListener('create', callback);
	}

	getAll() {
		return items;
	}
}

export default new notificationHandler();