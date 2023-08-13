
#include <array>
#include <vector>
#include <string>
using namespace std;

class Solution {

    struct SwapPair {
        char first;
        char second;
        SwapPair(char first, char second) : first(first), second(second) {}
    };

    static const int ALPHABET_SIZE = 26;

public:
    //C++17: bool buddyStrings (string_view input, string_view goal) const ...
    bool buddyStrings(const string& input, const string& goal) const {
        if (input.length() != goal.length()) {
            return false;
        }

        return equalInitialStrings_canRemainEqualByTwoSwaps(input, goal)
                || notEqualInitialStrings_canBeMadeEqualByTwoSwaps(input, goal);
    }

private:
    bool equalInitialStrings_canRemainEqualByTwoSwaps(const string& input, const string& goal) const {
        if (input == goal) {
            array<int, ALPHABET_SIZE> frequency{ 0};
            for (const auto& letter : goal) {
                if (++frequency[letter - 'a'] == 2) {
                    return true;
                }
            }
        }

        return false;
    }

    bool notEqualInitialStrings_canBeMadeEqualByTwoSwaps(const string& input, const string& goal) const {
        vector<SwapPair> swapPairs;
        for (size_t i = 0; i < goal.length() && swapPairs.size() <= 3; ++i) {
            if (input[i] != goal[i]) {
                swapPairs.emplace_back(SwapPair(input[i], goal[i]));
            }
        }

        return swapPairs.size() == 2
                && swapPairs[0].first == swapPairs[1].second
                && swapPairs[0].second == swapPairs[1].first;
    }
};
