import notification from '../notification';

let remaining = 0;
let start = 0;

export default {
    start(item, duration) {
        start = Date.now();
        if(remaining <= 0) remaining = duration;

        if(duration) {
            const countdown = setTimeout(
                () => {
                    remaining = 0;
                    notification.destroy(item);
                },
                remaining
            );

            return countdown;
        }

        return null;
    },

    pause(timer){
        clearTimeout(timer);
        remaining -= new Date() - start;
    }
}