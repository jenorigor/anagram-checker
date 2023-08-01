import StringInput from "../stringinput";
import { useCallback, useEffect, useState } from "react";
import { useAreStringsAnagrams } from "../../hooks/useAreStringsAnagrams";

const AnagramChecker = () => {
    const [firstString, setFirstString] = useState('');
    const [secondString, setSecondString] = useState('');
    const [areAnagrams, setAreAnagrams] = useState(false);
    const { areStringsAnagrams } = useAreStringsAnagrams();

    const compareStrings = useCallback(() => {
        setAreAnagrams(areStringsAnagrams(firstString, secondString))
    }, [firstString, secondString, areStringsAnagrams]);

    useEffect(() => {
        compareStrings();
    },[firstString, secondString, compareStrings]);

    return (
        <div className="w-full max-w-lg">
            <h1 className="mb-4">
                Simple Anagram Checker
            </h1>
            {areAnagrams ?
                <div
                    className="p-4 mb-4 text-sm"
                    role="alert">
                    <span className="font-medium">Tada!</span> {firstString} and {secondString} are ANAGRAMS!
                </div> : null
            }
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 columns-2">
                <div className="mb-2">
                    <StringInput id={1} value={firstString} setValue={setFirstString} />
                </div>
                <div className="mb-2">
                    <StringInput id={2} value={secondString} setValue={setSecondString} />
                </div>
            </form>
        </div>
    )
}

export default AnagramChecker;