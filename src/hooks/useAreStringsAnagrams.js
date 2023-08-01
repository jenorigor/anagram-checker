export const useAreStringsAnagrams = () => {
    const areStringsAnagrams = (firstString, secondString) => {
        if (
            firstString?.length !== secondString?.length ||
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

    return {
        areStringsAnagrams
    };
}