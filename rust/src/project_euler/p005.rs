use std::cmp::max;
/**
 * Problem 5: Smallest multiple
 *
 * 2520 is the smallest number that can be divided
 * by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is
 * evenly divisible by all of the numbers from 1 to n?
 */

// find the Greatest Common Divisor (means "Highest common factor") of two numbers
// E.g: gcd(10, 15) = 5
fn gcd(a: u64, b: u64) -> u64 {
    if b == 0 {
        return a;
    }
    gcd(b, a % b)
}

// find the Least|Lowest Common Multiple (lcm) of two numbers
// E.g.: lcm(4, 6) = 12
fn lcm(a: u64, b: u64) -> u64 {
    (a * b) / gcd(a, b)
}

pub fn smallest_multiple(n: u64) -> Option<u64> {
    if n < 2 {
        return None;
    }

    let mut result: Option<u64> = None;

    for a in 2..=n {
        let b = match result {
            Some(b) => max(a - 1, b),
            None => a - 1,
        };

        result = Some(lcm(a, b));
    }

    return result;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_gcd() {
        assert_eq!(gcd(10, 15), 5);
        assert_eq!(gcd(48, 18), 6);
    }

    #[test]
    fn test_lcm() {
        assert_eq!(lcm(2, 3), 6);
        assert_eq!(lcm(4, 6), 12);
    }

    #[test]
    fn test_for_5() {
        assert_eq!(smallest_multiple(5), Some(60));
    }

    #[test]
    fn test_for_7() {
        assert_eq!(smallest_multiple(7), Some(420));
    }

    #[test]
    fn test_for_10() {
        assert_eq!(smallest_multiple(10), Some(2520));
    }

    #[test]
    fn test_for_13() {
        assert_eq!(smallest_multiple(13), Some(360360));
    }

    #[test]
    fn test_for_20() {
        assert_eq!(smallest_multiple(20), Some(232792560));
    }
}
