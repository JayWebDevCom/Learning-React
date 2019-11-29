export const countdownActions = dispatcher =>
({
    tick(count) {
        console.log('current count:', count);
        dispatcher.handleAction({
            type: 'TICK',
            count: count -1
        })
    },
    reset(count) {
        dispatcher.handleAction({
            type: 'RESET',
            count
        })
    }
});