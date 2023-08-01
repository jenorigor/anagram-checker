import StringInput from "../stringinput";
import {useCallback, useEffect, useState} from "react";

const areStringsAnagrams = (firstString, secondString) => {
    if (
        firstString.length !== secondString.length ||
        firstString === secondString
    )
    {
        return false;
    }

    const sortFn = (a,b) => a.toLowerCase().localeCompare(b.toLowerCase());
    let s1 = Array.from(firstString).sort((a,b) => sortFn(a,b));
    let s2 = Array.from(secondString).sort((a,b) => sortFn(a,b));

    return s1.join('') === s2.join('');
}

const AnagramChecker = () => {
    const [firstString, setFirstString] = useState('');
    const [secondString, setSecondString] = useState('');
    const [areAnagrams, setAreAnagrams] = useState(false);

    const compareStrings = useCallback(() => {
        setAreAnagrams(areStringsAnagrams(firstString, secondString))
    }, [firstString, secondString]);

    useEffect(() => {
        compareStrings();
    },[firstString, secondString, compareStrings]);


    return (
        <div className="w-full max-w-lg">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-23l lg:text-3xl dark:text-white">
                Simple Anagram Checker
            </h1>
            {areAnagrams ?
                <div
                    className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                    role="alert">
                    <span className="font-medium">Tada!</span> {firstString} and {secondString} are ANAGRAMS!
                </div> : null
            }
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 columns-2">
                <div className="mb-2">
                    <StringInput id={1} value={firstString} setValue={setFirstString} />
                </div>
                <div className="mb-2">
                    <StringInput id={2} value={secondString} setValue={setSecondString}/>
                </div>
            </form>
        </div>
    )
}

export default AnagramChecker;