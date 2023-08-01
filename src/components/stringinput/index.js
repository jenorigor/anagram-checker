const StringInput = ({id, value, setValue}) => {
    const stringInputName = 'String #' +  id;
    return (
        <>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type="text"
            placeholder={stringInputName}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default StringInput;