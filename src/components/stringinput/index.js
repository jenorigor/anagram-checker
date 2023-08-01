const StringInput = ({id, value, setValue}) => {
    const stringInputName = 'String #' +  id;
    const placeholder = 'Type string to compare';
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {stringInputName}
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id} type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)} />
        </>
    )
}

export default StringInput;