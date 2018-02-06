export default {
    route: 'Index',
    todos: {
        list: Array(5).fill(0).map((value, index) => ({
            id: index,
            text: 'Text of todo'
        }))
        // list: {
        //     id: 1,
        //     text: 'Text of todo'
        // }
    }
};
