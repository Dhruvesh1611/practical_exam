// write a java programam to print the fibonacci series up to n terms
// the fibonacci sequence is : 0,1,1,2,3,5,8,13,21,34....

// input:Number of terms
// Output:Fibonacci series up to n terms

import java.util.Scanner;
class FibonacciSeries {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms for Fibonacci series: ");
        int n = scanner.nextInt();

        int firstTerm = 0, secondTerm = 1;
        System.out.println("Fibonacci Series up to " + n + " terms:");

        for (int i = 1; i <= n; ++i) {
            System.out.print(firstTerm + " ");

            // compute the next term
            int nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }
        scanner.close();
    }
}