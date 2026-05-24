package jar.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class ThirdLargest {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> numbers = new ArrayList<>();

        System.out.print("Enter how many numbers: ");
        int n = sc.nextInt();
        if (n < 3) {
            System.out.println("Please enter at least 3 numbers.");
            return;
        }
        for (int i = 0; i < n; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers.add(sc.nextInt());
        }

        Collections.sort(numbers, Collections.reverseOrder());

        int thirdLargest = numbers.get(2);

        System.out.println("3rd largest number is: " + thirdLargest);

        sc.close();
    }
}