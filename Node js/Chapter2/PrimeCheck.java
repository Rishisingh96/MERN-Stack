public class PrimeCheck {

    public static boolean isPrime(int n) {
        if (n <= 1) return false;   // 0,1 not prime
        if (n == 2) return true;    // 2 is prime
        if (n % 2 == 0) return false; // even >2 not prime

        for (int i = 3; i * i <= n; i += 2) { // check only odd
            if (n % i == 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int num = 29;
        System.out.println(isPrime(num)); // true
    }
}