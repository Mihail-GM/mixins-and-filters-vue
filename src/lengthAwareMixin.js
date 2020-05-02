export const lengthAwareMixin = {

    data() {
        return {
            firstText: 'Cool',
            secondText: 'Mihail'
        }
    },
    computed: {
        lengthAware() {
            return this.secondText + ' (' + this.secondText.length+1 + ')';
        }
    }
};