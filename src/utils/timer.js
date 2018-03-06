import notification from '../notification';

export default {
    start(item, duration) {
        if(duration) {
            const countdown = setTimeout(
                () => {
                    notification.destroy(item);
                },
                duration
            );

            return countdown;
        }

        return null;
    },

    pause(timer){
        clearTimeout(timer);
    }
}