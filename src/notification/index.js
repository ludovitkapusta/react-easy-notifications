import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

class notification {
    items = [];

    create( { className, title, content, contentLeft, contentRight, duration, beforeCreate, onCreate, onClose, closeOnClick, target }) {
        const notification = {
            className,
            title,
            content,
            contentLeft,
            contentRight,
            duration,
            beforeCreate,
            onCreate,
            onClose,
            closeOnClick,
            target
        };
        

        this.items.push(notification);
        eventEmitter.emit('change', this.items);
    };

    destroy(item) {
        let newItems = this.items;
        const index = newItems.indexOf(item);
        if(index > -1) {
            newItems.splice(index, 1);
            this.items = newItems;
            eventEmitter.emit('change', this.items);	
        }
    }

    addChangeListener(callback) {
        eventEmitter.addListener('change', callback);
    }
    
    removeChangeListener(callback) {
        eventEmitter.removeListener('change', callback);
    }
}

export default new notification();