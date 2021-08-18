/**
 * Problem 3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the given number?
 */
use std::collections::HashMap;

fn get_prime_factors(limit: u64) -> Vec<u64> {
    let limit_sqrt = ((limit + 1) as f64).sqrt().ceil() as u64;

    // Build an array of the size n with only boolean set to true.
    let mut prime_factors: HashMap<u64, bool> = HashMap::new();
    for i in 1..=limit {
        // Escape odd numbers.
        let mut default_value = true;
        if i > 2 && i % 2 == 0 {
            default_value = false
        }
        prime_factors.insert(i, default_value);
    }

    // Escape 0 and 1 values.
    if let Some(x) = prime_factors.get_mut(&0) {
        *x = false;
    }
    if let Some(x) = prime_factors.get_mut(&1) {
        *x = false;
    }

    // Find prime factors.
    for i in 2..=limit_sqrt {
        if *prime_factors.get(&i).unwrap() {
            if i * i < limit {
                for j in i * i..=limit {
                    // Only mut factors of i
                    if j % i == 0 {
                        if let Some(x) = prime_factors.get_mut(&j) {
                            *x = false;
                        }
                    }
                }
            }
        }
    }

    // Convert HashMap to array of prime factors.
    let mut prime_factors: Vec<u64> = prime_factors
        .into_iter()
        .filter(|&(_i, value)| value)
        .map(|(i, _value)| i as u64)
        .collect();

    prime_factors.sort();

    prime_factors
}

pub fn largest_prime_factor(value: u64) -> u64 {
    let prime_factors: Vec<u64> = get_prime_factors(value);
    let mut results: Vec<u64> = Vec::new();
    for prime_factor in &prime_factors {
        if value % prime_factor == 0 {
            results.push(*prime_factor)
        }
    }

    *results.get(results.len() - 1).unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_prime_factors() {
        let prime_factors_for_100 = vec![
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
            89, 97,
        ];
        assert_eq!(get_prime_factors(100), prime_factors_for_100);
    }

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

    // #[test]
    // fn tests_for_600851475143() {
    //     assert_eq!(largest_prime_factor(600851475143), 6857);
    // }
}
