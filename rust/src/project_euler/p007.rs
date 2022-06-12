/**
 * Problem 7: 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the nth prime number?
 *
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-7-10001st-prime
 */
use super::utils;

pub fn nth_prime(n: usize) -> u32 {
    let mut result: Vec<u32> = Vec::new();
    let mut i = 2;
    while result.len() < n {
        if utils::is_prime(i) {
            result.push(i);
        }
        i += 1;
    }
    result[n - 1]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_nth_prime() {
        assert_eq!(nth_prime(1), 2);
        assert_eq!(nth_prime(2), 3);
        assert_eq!(nth_prime(3), 5);
        assert_eq!(nth_prime(4), 7);
        assert_eq!(nth_prime(5), 11);
        assert_eq!(nth_prime(6), 13);
        assert_eq!(nth_prime(7), 17);
        assert_eq!(nth_prime(8), 19);
        assert_eq!(nth_prime(9), 23);
        assert_eq!(nth_prime(10), 29);
        assert_eq!(nth_prime(100), 541);
        assert_eq!(nth_prime(1000), 7919);
        assert_eq!(nth_prime(10001), 104743);
    }
}
