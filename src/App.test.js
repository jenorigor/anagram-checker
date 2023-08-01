import { render, screen } from '@testing-library/react';
import AnagramChecker from './components/anagramchecker';
import { useAreStringsAnagrams } from "./hooks/useAreStringsAnagrams";

test('renders anagram checker form', () => {
  render(<AnagramChecker />);
  const titleElement = screen.getByText(/Simple Anagram Checker/i);
  expect(titleElement).toBeInTheDocument();
});

test('check if anagram hook function is working properly', () => {
  let success = true;
  const { areStringsAnagrams } = useAreStringsAnagrams();
  const testCases = [
    {
      firstString: '',
      secondString: '',
      result: false,
    },
    {
      firstString: 'samestring',
      secondString: 'samestring',
      result: false,
    },
    {
      firstString: null,
      secondString: null,
      result: false,
    },
    {
      firstString: 'angel',
      secondString: 'glean',
      result: true,
    },
    {
      firstString: 'cat',
      secondString: 'act',
      result: true,
    },
    {
      firstString: 'peach',
      secondString: 'cheap',
      result: true,
    },
  ];

  for(let i = 0; i < testCases.length; i++)
  {
    let testCase = testCases[i];
    let result = areStringsAnagrams(testCase.firstString, testCase.secondString);

    if (result !== testCase.result)
    {
      success = false;
      break;
    }
  }

  expect(success).toBe(true);
});
