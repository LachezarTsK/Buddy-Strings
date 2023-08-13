
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private record SwapPair(char first, char second) {}

    private static final int ALPHABET_SIZE = 26;

    public boolean buddyStrings(String input, String goal) {
        if (input.length() != goal.length()) {
            return false;
        }

        return equalInitialStrings_canRemainEqualByTwoSwaps(input, goal)
                || notEqualInitialStrings_canBeMadeEqualByTwoSwaps(input, goal);
    }

    private boolean equalInitialStrings_canRemainEqualByTwoSwaps(String input, String goal) {
        if (input.equals(goal)) {
            int[] frequency = new int[ALPHABET_SIZE];
            for (int i = 0; i < goal.length(); ++i) {
                if (++frequency[goal.charAt(i) - 'a'] == 2) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean notEqualInitialStrings_canBeMadeEqualByTwoSwaps(String input, String goal) {
        List<SwapPair> swapPairs = new ArrayList<>();
        for (int i = 0; i < goal.length() && swapPairs.size() <= 3; ++i) {
            if (input.charAt(i) != goal.charAt(i)) {
                swapPairs.add(new SwapPair(input.charAt(i), goal.charAt(i)));
            }
        }

        return swapPairs.size() == 2
                && swapPairs.get(0).first == swapPairs.get(1).second
                && swapPairs.get(0).second == swapPairs.get(1).first;
    }
}
