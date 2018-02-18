import { EventEmitter } from 'events';
class notification extends EventEmitter {
	constructor() {
		super();
		this.items = [];
	}

    create(title, duration) {
		const notification = {
			title,
			duration
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

export default new notification();