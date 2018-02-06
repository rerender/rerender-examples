function todosById({ getState }) {
    return getState(['todos', 'list']).reduce((memo, item) => {
        memo[item.id] = item;

        return memo;
    }, {});
}

export default todosById;
