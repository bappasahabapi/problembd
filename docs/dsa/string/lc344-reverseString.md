# Reverse String
run code:

    g++ -std=c++11 LC-125_Valid-Palindrome.cpp && ./a.out   

🔥 `two-pointer` | `reverse()` method


```c++
// using string

class Solution {
public:
    void reverseString(vector<char>& s) {
    reverse(s.begin(), s.end());
};
};

//todo: using car array

Z class Solution {
// public:
//     void reverseString(vector<char>& s) {
//     int start = 0;
//     int end = s.size() - 1;

//     while (start < end) {
//         swap(s[start], s[end]);
//         start++;
//         end--;
//     }
//     }
// };



```

