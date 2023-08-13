
using System;
using System.Collections.Generic;

public class Solution
{

    private struct SwapPair
    {
        public char first;
        public char second;

        public SwapPair(char first, char second)
        {
            this.first = first;
            this.second = second;
        }
    };

    private const int ALPHABET_SIZE = 26;

    public bool BuddyStrings(string input, string goal)
    {
        if (input.Length != goal.Length)
        {
            return false;
        }

        return equalInitialStrings_canRemainEqualByTwoSwaps(input, goal)
                || notEqualInitialStrings_canBeMadeEqualByTwoSwaps(input, goal);
    }

    private bool equalInitialStrings_canRemainEqualByTwoSwaps(String input, String goal)
    {
        if (input.Equals(goal))
        {
            int[] frequency = new int[ALPHABET_SIZE];
            foreach (char letter in goal)
            {
                if (++frequency[letter - 'a'] == 2)
                {
                    return true;
                }
            }
        }

        return false;
    }

    private bool notEqualInitialStrings_canBeMadeEqualByTwoSwaps(String input, String goal)
    {
        var swapPairs = new List<SwapPair>();
        for (int i = 0; i < goal.Length && swapPairs.Count <= 3; ++i)
        {
            if (input[i] != goal[i])
            {
                swapPairs.Add(new SwapPair(input[i], goal[i]));
            }
        }

        return swapPairs.Count == 2
                && swapPairs[0].first == swapPairs[1].second
                && swapPairs[0].second == swapPairs[1].first;
    }
}
