#include <iostream>
using namespace std;

int main() {
    double price1, price2, price3;
    cout << "Enter the price of the first item: ";
    cin >> price1;
    cout << "Enter the price of the second item: ";
    cin >> price2;
    cout << "Enter the price of the third item: ";
    cin >> price3;

    // Calculate the total cost
    double total = price1 + price2 + price3;
    double avg = total / 3;

    // Display the result
    cout << "The total cost of the three items is: $" << total << endl;
    cout << "The average price of the three items is: $" << avg << endl;

    return 0;
}