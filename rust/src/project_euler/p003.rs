/**
 * Problem 3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the given number?
 */

pub fn largest_prime_factor(limit: u64) -> u64 {
    let limit_sqrt = (limit as f64).sqrt().floor() as u64;
    let mut max_prime = 2;
    let mut n = limit;

    for i in 2..=limit_sqrt {
        while n % i == 0 {
            max_prime = i;
            n = ((n / i) as f64).floor() as u64;
        }
    }

    if n > 2 {
        n
    } else {
        max_prime
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests_for_2() {
        assert_eq!(largest_prime_factor(2), 2);
    }

    #[test]
    fn tests_for_3() {
        assert_eq!(largest_prime_factor(3), 3);
    }

    #[test]
    fn tests_for_5() {
        assert_eq!(largest_prime_factor(5), 5);
    }

    #[test]
    fn tests_for_7() {
        assert_eq!(largest_prime_factor(7), 7);
    }

    #[test]
    fn tests_for_8() {
        assert_eq!(largest_prime_factor(8), 2);
    }

    #[test]
    fn tests_for_13195() {
        assert_eq!(largest_prime_factor(13195), 29);
    }

    #[test]
    fn tests_for_600851475143() {
        assert_eq!(largest_prime_factor(600851475143), 6857);
    }
}
