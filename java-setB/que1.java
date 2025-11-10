//create calculator that overloads add() method for two integers, two doubles, and three integers.

class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();


        int intSum = calc.add(5, 10);
        System.out.println("Sum of two integers: " + intSum);


        double doubleSum = calc.add(5.5, 10.2);
        System.out.println("Sum of two doubles: " + doubleSum);


        int threeIntSum = calc.add(1, 2, 3);
        System.out.println("Sum of three integers: " + threeIntSum);
    }
}